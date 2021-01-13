import Asana from 'asana';

import buildAsanaClient from './buildAsanaClient';

const markTaskComplete = async (
    taskId: string | number
): Promise<Asana.resources.Tasks.Type> => {
    const asana = buildAsanaClient();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error - name cant possibly be required
    return await asana.tasks.update(taskId, { completed: true });
};

export default markTaskComplete;
