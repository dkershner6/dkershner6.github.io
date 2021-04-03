import CodingStats from '../../common/CodingStats';
import { buildDynamoClient, DYNAMO_TABLE_NAME } from '../aws/client';

export interface CodingStatsWithIndexes extends CodingStats {
    pk: string;
    sk: string;
    type: 'CODINGSTATS';
}

const INDEXES = ['pk', 'sk', 'type'];

export default class CodingStatsModel {
    static type: 'CODINGSTATS' = 'CODINGSTATS';

    public static buildPk = (userName: string): string =>
        `USER#${userName}#${CodingStatsModel.type}`;

    public static buildSk = (userName: string): string =>
        `USER#${userName}#${CodingStatsModel.type}`;

    public static addIndexes = (
        codingStats: CodingStats
    ): CodingStatsWithIndexes => ({
        ...codingStats,
        pk: CodingStatsModel.buildPk(codingStats.userName),
        sk: CodingStatsModel.buildSk(codingStats.userName),
        type: CodingStatsModel.type
    });

    public static removeIndexes = (
        codingStatsWithIndexes: CodingStatsWithIndexes
    ): CodingStats => {
        const codingStats = { ...codingStatsWithIndexes };
        for (const index of INDEXES) {
            delete codingStats[index];
        }
        return codingStats;
    };

    public static updateDate = (
        codingStatsWithIndexes: CodingStatsWithIndexes
    ): CodingStatsWithIndexes => ({
        ...codingStatsWithIndexes,
        updatedAt: new Date().toISOString()
    });

    public static get = async (userName: string): Promise<CodingStats> => {
        const client = buildDynamoClient();

        const pk = CodingStatsModel.buildPk(userName);
        const sk = CodingStatsModel.buildSk(userName);

        const params: AWS.DynamoDB.DocumentClient.GetItemInput = {
            TableName: DYNAMO_TABLE_NAME,
            Key: {
                pk,
                sk
            }
        };

        const response = await client.get(params).promise();

        if (response?.Item) {
            return CodingStatsModel.removeIndexes(
                response.Item as CodingStatsWithIndexes
            );
        }

        return null;
    };

    public static put = async (
        codingStats: CodingStats
    ): Promise<CodingStats> => {
        const client = buildDynamoClient();

        const codingStatsWithIndexes = CodingStatsModel.addIndexes(codingStats);
        const updatedCodingStats = CodingStatsModel.updateDate(
            codingStatsWithIndexes
        );

        const params: AWS.DynamoDB.DocumentClient.PutItemInput = {
            TableName: DYNAMO_TABLE_NAME,
            Item: updatedCodingStats
        };

        await client.put(params).promise();

        return codingStats;
    };
}
