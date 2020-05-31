import { technologies } from '../../../data/technologiesData';

export default async (req, res) => {
    const { id } = req.query;

    const technology = technologies.find((technology) => technology.id === id);

    res.status(200).json(technology);
};
