json = {
	"ctRoot": [
		{
			"_id": "KHKTZHXOBEYYSHE3",
			"name": "Lina Mcelroy",
			"dob": "2017-05-26",
			"address": {
				"street": "7149 Walter Street",
				"town": "Llanfachreth",
				"postode": "SO88 3AJ"
			},
			"telephone": "+39-9698-554-853",
			"pets": [
				"MIMI",
				"Cooper"
			],
			"score": 9.5,
			"email": "taina_dawson6646@softball.com",
			"url": "http://jr.com",
			"description": "eva easter restrict instances gem waves editorials nobody story reality eagles stay california line cds finds fit actors allergy guns",
			"verified": false,
			"salary": 57905
		},
		{
			"_id": "G0ASGSBKZECBNOGD",
			"name": "Lindsey Bautista",
			"dob": "2019-01-14",
			"address": {
				"street": "8860 Foggs Avenue",
				"town": "Alfreton",
				"postode": "SS87 3NG"
			},
			"telephone": "+508-0991-654-731",
			"pets": [
				"Loki",
				"Riley"
			],
			"score": 9,
			"email": "alexis83@closes.com",
			"url": "http://www.gmc.com",
			"description": "e awful downloadable deer diy cite corpus bizarre em infection franchise gel management many token chronicle gym amended contest buried",
			"verified": true,
			"salary": 46238
		},
		{
			"_id": "RPX0GHCIMCVNUTUL",
			"name": "Bao Epstein",
			"dob": "2020-06-28",
			"address": {
				"street": "3545 Rivershill Street",
				"town": "Oakengates",
				"postode": "WF73 3VT"
			},
			"telephone": "+90-0966-853-504",
			"pets": [
				"MIMI",
				"Cooper"
			],
			"score": 9.4,
			"email": "olenebey200@gmail.com",
			"url": "http://www.tape.com",
			"description": "eyed diego tin members papers source advantages sensor ice delivery premiere rally grew ntsc portions sure corp offering exposed lt",
			"verified": true,
			"salary": 51379
		},
		{
			"_id": "X5VXR6PEM8IPVEVF",
			"name": "Evette Cody",
			"dob": "2019-01-26",
			"address": {
				"street": "3584 Carrington Lane",
				"town": "Caldicot",
				"postode": "KT4 8VT"
			},
			"telephone": "+41-5424-794-203",
			"pets": [
				"Noodle",
				"Tucker"
			],
			"score": 7.7,
			"email": "stephainetilley64@hotmail.com",
			"url": "http://www.cop.com",
			"description": "ciao shakira disney dts ongoing puppy database over unfortunately transit rotary investor scholarships accept contacting permit finish merry mel deemed",
			"verified": true,
			"salary": 13806
		},
		{
			"_id": "LC27F5Q7CV6ER5Z3",
			"name": "Anton Wallen",
			"dob": "2014-07-14",
			"address": {
				"street": "7316 Brentnor Circle",
				"town": "Wilton",
				"postode": "DD9 9KS"
			},
			"telephone": "+51-2753-685-128",
			"pets": [
				"Oscar",
				"Leo"
			],
			"score": 1.3,
			"email": "mirtagunn@gmail.com",
			"url": "https://www.setting.com",
			"description": "flashers enclosure editor protected ce latina begins entrepreneurs bi vbulletin ci groundwater timer said kissing zope cool uri nodes joy",
			"verified": true,
			"salary": 12860
		}
	]
}


# Lambda handler
def handler(event, context):
    return {
        'headers': {
            'Content-Type': 'application/json',
        },
        'body': json,
        'statusCode': '200'
    }
