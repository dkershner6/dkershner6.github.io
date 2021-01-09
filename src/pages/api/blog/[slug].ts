import { NextApiRequest, NextApiResponse } from 'next';

export default async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> => {
    const { slug } = req.query;

    const { default: articleData } = await import(
        `../../../../public/blog/${slug}.json`
    );

    return res.status(200).json(articleData);
};
