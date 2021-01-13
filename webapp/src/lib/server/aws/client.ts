import AWS from 'aws-sdk';

AWS.config.credentials = {
    accessKeyId: process.env.AWS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET
};

export const DYNAMO_TABLE_NAME = process.env.DYNAMO_TABLE_NAME;

export const buildDynamoClient = (): AWS.DynamoDB.DocumentClient => {
    return new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });
};
