import React, { ReactElement } from 'react';

interface IContent {
    content: string;
    className?: string;
}

export const HTMLContent = ({ content, className }: IContent): ReactElement => (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }: IContent): ReactElement => (
    <div className={className}>{content}</div>
);

export default Content;
