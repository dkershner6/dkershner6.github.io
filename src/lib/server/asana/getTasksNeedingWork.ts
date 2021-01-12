import Asana from 'asana';

import {
    ADEPT_WORKSPACE_GID,
    ALL_ADEPT_PROJECT_GID,
    ME_GID
} from '../../common/asanaConstants';

import buildAsanaClient from './buildAsanaClient';

const getTasksNeedingWork = async (): Promise<Asana.resources.Tasks.Type[]> => {
    const asana = buildAsanaClient();

    const { data: tasks } = await asana.tasks.searchInWorkspace(
        ADEPT_WORKSPACE_GID,
        {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error - Nope, Asana
            'created_by.any': ME_GID,
            // 'projects.not': ALL_ADEPT_PROJECT_GID,
            opt_fields: 'name,assignee,projects,memberships,custom_fields'
        }
    );

    const task = tasks.find((task) => task.gid === '1199529358652631');

    console.log(task);

    return tasks;
};

export default getTasksNeedingWork;
