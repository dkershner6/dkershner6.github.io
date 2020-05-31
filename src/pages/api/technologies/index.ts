import { technologies } from '../../../data/technologiesData';

export default async (req, res) => {
    res.status(200).json(technologies);
};
