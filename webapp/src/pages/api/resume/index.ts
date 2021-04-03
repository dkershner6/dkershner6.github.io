import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import ResumeModel from '../../../lib/server/models/ResumeModel';

const handler = nc();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req?.body) {
        return res.status(422).json({ errorMessage: 'Body is required' });
    }

    if (req?.query?.password !== process.env.SECRET_PASSWORD) {
        return res.status(401).json({ errorMessage: 'Unauthorized' });
    }

    await ResumeModel.put(req.body);

    return res.status(201).json(req.body);
});

export default handler;
