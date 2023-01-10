#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CsfStackUsEast1 } from '../lib/csf-stack';

const app = new cdk.App();
new CsfStackUsEast1(app, 'CsfStackUsEast1', {
  env: { account: process.env.AWS_ACCOUNT_NUMBER!, region: 'us-east-1' },
});