const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });

const dynamodb = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.TABLE_NAME;

exports.handler = async (event) => {
  let userId = event.pathParameters.userid;
  let data = await dynamodb.get({
    TableName: tableName,
    Key: {
      userid: userId
    }
  }).promise();

  if (data.Item) {
    return {
      statusCode: 200,
      body: JSON.stringify(
        data.Item
      )
    }
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'User not found'
      })
    }
  }
}