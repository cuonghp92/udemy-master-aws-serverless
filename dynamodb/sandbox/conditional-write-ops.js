const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.put({
  TableName: 'td_notes_sdk',
  Item: {
    user_id: 'bb',
    timestamp: 2,
    title: 'New title',
    content: 'New content'
  },
  ConditionExpression: '#t <> :t',
  ExpressionAttributeNames: {
    '#t': 'timestamp'
  },
  ExpressionAttributeValues: {
    ':t': 3
  }
}, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});