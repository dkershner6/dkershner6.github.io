import React, { ReactElement } from 'react';

import startCase from 'lodash.startcase';
import { Badge } from 'react-bootstrap';

interface IBlogPostTag {
    key?: number;
    tag: string;
    count?: number;
}

const BlogPostTag = (props: IBlogPostTag): ReactElement => {
    const { tag } = props;
    return (
        <a href={`/blog/tags/${tag}`}>
            <InnerBlogPostTag {...props} />
        </a>
    );
};

const InnerBlogPostTag = ({ tag, count }: IBlogPostTag) => {
    return (
        <Badge pill variant="info">
            {startCase(tag.toLowerCase())} <CountBadge count={count} />
        </Badge>
    );
};

export const CountBadge = (props: { count?: number }): ReactElement => {
    const { count } = props;
    if (count === undefined) {
        return null;
    } else {
        return <Badge variant="light">{count}</Badge>;
    }
};

export default BlogPostTag;
