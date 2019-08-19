import React from "react";
import { MdCloud, MdCloudQueue } from "react-icons/md";

const fiveNumbers = [1, 2, 3, 4, 5];

interface SkillDisplayProps {
  filled: number;
}

const SkillDisplay = (props: SkillDisplayProps) => {
  return (
    <React.Fragment>
      {fiveNumbers.map((number, index) => (
        <SkillBubble key={index} yes={props.filled >= number} />
      ))}
    </React.Fragment>
  );
};

interface SkillBubbleProps {
  yes: boolean;
}

const SkillBubble = (props: SkillBubbleProps) => {
  if (props.yes) {
    return <MdCloud />;
  } else {
    return <MdCloudQueue />;
  }
};

export default SkillDisplay;
