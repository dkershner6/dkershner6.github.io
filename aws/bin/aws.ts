#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';

import { DKershnerStack } from '../lib/aws-stack';

const app = new cdk.App();
new DKershnerStack(app, 'DKershnerStack', { env: { region: 'us-west-2' } });
