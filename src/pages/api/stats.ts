import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import getCodingStats from '../../lib/server/handlers/getCodingStats';

const handler = nc();

handler.get(
    async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
        try {
            const codingStats = await getCodingStats();
            return res.status(200).json({ codingStats: codingStats ?? {} });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
            return res.status(500).json({ errorMessage: error.message });
        }
    }
);

export default handler;
