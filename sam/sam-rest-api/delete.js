const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });

const dynamodb = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.TABLE_NAME;

exports.handler = async (event) => {
  let userId = event.pathParameters.userid;
  let data = await dynamodb.delete({
    TableName: tableName,
    Key: {
      userid: userId
    }
  }).promise();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'User deleted successufully'
    })
  }
}