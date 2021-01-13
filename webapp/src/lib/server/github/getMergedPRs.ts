import { graphql } from '@octokit/graphql';

import getMergedPRsQuery from '../graphql/queries/getMergedPRsQuery';

export interface GetMergedPRsResponse {
    viewer: {
        pullRequests: {
            nodes: {
                url: string;
            }[];
        };
    };
}

const getMergedPRs = async (): Promise<GetMergedPRsResponse> => {
    return await graphql<GetMergedPRsResponse>(getMergedPRsQuery, {
        headers: {
            authorization: `token ${process.env.GITHUB_PERSONAL_TOKEN}`
        }
    });
};

export default getMergedPRs;
