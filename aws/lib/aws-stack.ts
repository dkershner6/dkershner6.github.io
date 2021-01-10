import * as dynamodb from '@aws-cdk/aws-dynamodb';
import { AttributeType } from '@aws-cdk/aws-dynamodb';
import * as cdk from '@aws-cdk/core';

export class DKershnerStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new dynamodb.Table(this, 'DKershnerTable', {
            tableName: 'dkershner-prod',
            billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
            partitionKey: {
                name: 'pk',
                type: AttributeType.STRING
            },
            sortKey: {
                name: 'sk',
                type: AttributeType.STRING
            },
            timeToLiveAttribute: 'expiresAt'
        });
    }
}
