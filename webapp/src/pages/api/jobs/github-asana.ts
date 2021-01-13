import nc from 'next-connect';

import postGithubJobHandler from '../../../lib/server/handlers/postGithubJobHandler';

const handler = nc();

handler.post(postGithubJobHandler);

export default handler;
