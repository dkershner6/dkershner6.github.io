import React from 'react';

interface IContent {
    content: string;
    className?: string;
}

export const HTMLContent = ({ content, className }: IContent) => <div className={className} dangerouslySetInnerHTML={{ __html: content }} />;

const Content = ({ content, className }: IContent) => <div className={className}>{content}</div>;

export default Content;
