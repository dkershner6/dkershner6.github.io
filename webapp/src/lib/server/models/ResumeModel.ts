import Resume from '../../common/resume/Resume';
import { buildDynamoClient, DYNAMO_TABLE_NAME } from '../aws/client';

interface ResumeWithIndexes extends Resume {
    pk: string;
    sk: string;
    type: 'RESUME';
}

const INDEXES = ['pk', 'sk', 'type'];

export default class ResumeModel {
    static type: 'RESUME' = 'RESUME';

    static buildPk = (slug: string): string => `${ResumeModel.type}#${slug}`;

    static buildSk = (slug: string): string => `${ResumeModel.type}#${slug}`;

    static addIndexes = (resume: Resume): ResumeWithIndexes => ({
        ...resume,
        pk: ResumeModel.buildPk(resume.slug),
        sk: ResumeModel.buildSk(resume.slug),
        type: ResumeModel.type
    });

    public static removeIndexes = (
        resumeWithIndexes: ResumeWithIndexes
    ): Resume => {
        const resume = { ...resumeWithIndexes };
        for (const index of INDEXES) {
            delete resume[index];
        }
        return resume;
    };

    public static updateDate = (
        resumeWithIndexes: ResumeWithIndexes
    ): ResumeWithIndexes => ({
        ...resumeWithIndexes,
        updatedAt: new Date().toISOString()
    });

    public static get = async (slug: string): Promise<Resume> => {
        const dynamo = buildDynamoClient();

        const params: AWS.DynamoDB.DocumentClient.GetItemInput = {
            TableName: DYNAMO_TABLE_NAME,
            Key: {
                pk: ResumeModel.buildPk(slug),
                sk: ResumeModel.buildSk(slug)
            }
        };

        const result = await dynamo.get(params).promise();
        if (result?.Item) {
            return ResumeModel.removeIndexes(result.Item as ResumeWithIndexes);
        }
        return null;
    };

    public static put = async (resume: Resume): Promise<void> => {
        const dynamo = buildDynamoClient();

        const params: AWS.DynamoDB.DocumentClient.PutItemInput = {
            TableName: DYNAMO_TABLE_NAME,
            Item: ResumeModel.updateDate(ResumeModel.addIndexes(resume))
        };

        await dynamo.put(params).promise();
    };
}
