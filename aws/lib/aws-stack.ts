import * as dynamodb from '@aws-cdk/aws-dynamodb';
import { AttributeType } from '@aws-cdk/aws-dynamodb';
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as events from '@aws-cdk/aws-events';
import * as targets from '@aws-cdk/aws-events-targets';
import { Duration } from '@aws-cdk/core';

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

        const githubAsanaCronLambda = new lambda.Function(
            this,
            'GitHubAsanaCronLambda',
            {
                code: new lambda.AssetCode('./lambda/githubAsanaCron'),
                runtime: lambda.Runtime.NODEJS_12_X,
                handler: 'index.handler',
                memorySize: 128,
                timeout: Duration.seconds(60)
            }
        );

        const rule = new events.Rule(this, 'Rule', {
            schedule: events.Schedule.expression('cron(*/5 0-11 ? * MON-FRI *)')
        });

        rule.addTarget(new targets.LambdaFunction(githubAsanaCronLambda));
    }
}
