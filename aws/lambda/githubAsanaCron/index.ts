import Axios from 'axios';

export const handler = async (): Promise<void> => {
    const { data } = await Axios.post(
        'https://dkershner.com/api/jobs/github-asana'
    );
    console.log(data);
};
