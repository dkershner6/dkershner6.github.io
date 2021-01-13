import Asana from 'asana';

import { ADEPT_WORKSPACE_GID, ME_GID } from '../../common/asanaConstants';

import buildAsanaClient from './buildAsanaClient';

const getAsanaOpenTasks = async (): Promise<Asana.resources.Tasks.Type[]> => {
    const asana = buildAsanaClient();

    const { data: openTasks } = await asana.tasks.findAll({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error - Asana is wrong, this is a string
        assignee: ME_GID,
        workspace: ADEPT_WORKSPACE_GID,
        completed_since: 'now',
        opt_fields: 'name,assignee,projects,custom_fields'
    });

    return openTasks;
};

export default getAsanaOpenTasks;
