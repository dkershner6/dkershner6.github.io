import Asana from 'asana';

const buildAsanaClient = (): Asana.Client => {
    return Asana.Client.create().useAccessToken(process.env.ASANA_PAT);
};

export default buildAsanaClient;
