import Asana from 'asana';

import buildAsanaClient from './buildAsanaClient';

const addTaskProject = async (
    taskId: string | number,
    projectId: string | number
): Promise<Asana.resources.Tasks.Type> => {
    const asana = buildAsanaClient();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error - Not required, again
    return await asana.tasks.addProject(taskId, {
        project: projectId
    });
};

export default addTaskProject;
