export default async (req, res) => {
    const { slug } = req.query;

    const { default: articleData } = await import(`../../../public/blog/${slug}.json`);

    res.status(200).json(articleData);
};
