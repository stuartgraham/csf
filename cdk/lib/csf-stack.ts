import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class CsfStackUsEast1 extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3 bucket for csf
    const csfBucket = new s3.Bucket(this, 'csfS3Bucket', {
      bucketName: process.env.BUCKET_NAME,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL
    });

    // ACM
    const arn : string = process.env.CERTIFICATE_ARN!;
    const csfAcmCertificate = acm.Certificate.fromCertificateArn(this, 'csfAcmCertificate', arn);

    // Origin Access Identity
    const csfOriginAccessIdentity = new cloudfront.OriginAccessIdentity(this, 'csfOriginAccessIdentity');
    csfBucket.grantRead(csfOriginAccessIdentity);

    // // Cloudfront Function
    // const urlRewriterCfFunction = new cloudfront.Function(this, "UrlRewriterCfFunction", {
    //   code: cloudfront.FunctionCode.fromFile({
    //     filePath: (path.join(__dirname, '../cloudfront-function/url-rewriter/main.js'))
    //   }),
    // });

    // Cloudfront errors
    const error403: cloudfront.ErrorResponse = {
      httpStatus: 403,
      responseHttpStatus: 404,
      responsePagePath: '/404.html',
      ttl: cdk.Duration.minutes(30),
    }
    const error404: cloudfront.ErrorResponse = {
      httpStatus: 404,
      responseHttpStatus: 404,
      responsePagePath: '/404.html',
      ttl: cdk.Duration.minutes(30),
    }
    const error503: cloudfront.ErrorResponse = {
      httpStatus: 503,
      responseHttpStatus: 404,
      responsePagePath: '/404.html',
      ttl: cdk.Duration.minutes(30),
    }

    // Cloudfront
    const csfCloudfrontDistro = new cloudfront.Distribution(this, 'csfCFDistribution', {
      defaultBehavior: { 
        origin: new origins.S3Origin(csfBucket),
        functionAssociations: [
        ],
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS
      },
      errorResponses: [error403, error404, error503],
      domainNames: ['csf.rstu.xyz'],
      certificate: csfAcmCertificate,
      defaultRootObject: 'index.html',
      comment: 'csf.rstu.xyz'
    });

    // Cfn Output
    new cdk.CfnOutput(this, 'csfCloudfrontDistributionId', {
      value: csfCloudfrontDistro.distributionId,
      description: 'Distribution ID for csf.rstu.xyz',
      exportName: 'CsfDistributionID',
    });

    new cdk.CfnOutput(this, 'csfCloudfrontDomainName', {
      value: csfCloudfrontDistro.domainName,
      description: 'CF domain name for csf.rstu.xyz',
      exportName: 'CsfDomainName',
    });

    //API 

    // Lambda Function - Test
    const testResponseFunction = new lambda.Function(this, 'testResponseFunction', {
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda/test')),
      handler: 'main.handler',
      runtime: lambda.Runtime.PYTHON_3_9,
      timeout: cdk.Duration.seconds(30),
      architecture: lambda.Architecture.ARM_64,
    });

    // Function URL
    testResponseFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });
    
  }
}