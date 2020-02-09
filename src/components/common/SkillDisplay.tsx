import React from 'react';
import { MdCloud, MdCloudQueue } from 'react-icons/md';

const fiveNumbers = [1, 2, 3, 4, 5];

interface ISkillDisplay {
    filled: number;
}

const SkillDisplay = (props: ISkillDisplay) => {
    return (
        <>
            {fiveNumbers.map((number, index) => (
                <SkillBubble key={index} yes={props.filled >= number} />
            ))}
        </>
    );
};

interface ISkillBubble {
    key?: number;
    yes: boolean;
}

const SkillBubble = (props: ISkillBubble) => {
    if (props.yes) {
        return <MdCloud />;
    } else {
        return <MdCloudQueue />;
    }
};

export default SkillDisplay;
