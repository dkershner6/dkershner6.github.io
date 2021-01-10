import Asana from 'asana';

import buildAsanaClient from './buildAsanaClient';

const addTaskComment = async (
    taskId: string | number,
    text: string
): Promise<Asana.resources.Tasks.Type> => {
    const asana = buildAsanaClient();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error - Not required, again
    return await asana.tasks.addComment(taskId, {
        text
    });
};

export default addTaskComment;
