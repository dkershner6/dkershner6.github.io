import Asana from 'asana';
import { NextApiRequest, NextApiResponse } from 'next';

import {
    PULL_REQUEST_CUSTOM_FIELD_NAME,
    MARKED_COMPLETE_COMMENT,
    ALL_ADEPT_PROJECT_GID,
    ADDED_ADEPT_PROJECT_COMMENT
} from '../../common/asanaConstants';
import addTaskComment from '../asana/addTaskComment';
import addTaskProject from '../asana/addTaskProject';
import getAsanaOpenTasks from '../asana/getAsanaOpenTasks';
import getTasksNeedingWork from '../asana/getTasksNeedingWork';
import markTaskComplete from '../asana/markTaskComplete';
import getMergedPRs from '../github/getMergedPRs';

const postGithubJobHandler = async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> => {
    try {
        let changes = 0;
        const [mergedPRsResponse, openTasks] = await Promise.all([
            getMergedPRs(),
            getAsanaOpenTasks()
        ]);

        const mergedPRs = mergedPRsResponse?.viewer?.pullRequests?.nodes;
        if (openTasks && mergedPRs && mergedPRs.length > 0) {
            const mergedPRUrls = mergedPRs.map((pr) => pr.url);
            for (const openTask of openTasks) {
                changes = changes + (await addToCombinedProject(openTask));
                changes =
                    changes +
                    (await markCompleteWhenPRClose(mergedPRUrls, openTask));
            }
        }

        const tasksNeedingWork = await getTasksNeedingWork();
        if (tasksNeedingWork && tasksNeedingWork.length > 0) {
            for (const task of tasksNeedingWork) {
                changes = changes + (await addToCombinedProject(task));
            }
        }

        // eslint-disable-next-line no-console
        console.log(`GitHub/Asana Job Ran with ${changes} changes.`);

        return res.status(200).json({ changes });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return res.status(500).json({ errorMessage: error.message });
    }
};

const markCompleteWhenPRClose = async (
    mergedPRUrls: string[],
    openTask: Asana.resources.Tasks.Type
): Promise<number> => {
    if (openTask?.custom_fields) {
        const pullRequestCustomField = openTask.custom_fields.find(
            (customField) =>
                customField?.name === PULL_REQUEST_CUSTOM_FIELD_NAME
        );

        if (
            mergedPRUrls.includes(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error - Again, asana?
                pullRequestCustomField.text_value
            )
        ) {
            await addTaskComment(openTask.gid, MARKED_COMPLETE_COMMENT);
            await markTaskComplete(openTask.gid);
            return 1;
        }
    }
    return 0;
};

const addToCombinedProject = async (
    openTask: Asana.resources.Tasks.Type
): Promise<number> => {
    if (
        openTask?.gid &&
        !openTask?.projects?.find(
            (project) => project.gid === ALL_ADEPT_PROJECT_GID
        )
    ) {
        await addTaskComment(openTask.gid, ADDED_ADEPT_PROJECT_COMMENT);
        await addTaskProject(openTask.gid, ALL_ADEPT_PROJECT_GID);
        return 1;
    }
    return 0;
};

export default postGithubJobHandler;
