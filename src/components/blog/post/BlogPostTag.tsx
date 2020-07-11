import React from 'react';
import { Badge } from 'react-bootstrap';
import startCase from 'lodash.startcase';

interface IBlogPostTag {
    key?: number;
    tag: string;
    count?: number;
}

const BlogPostTag = (props: IBlogPostTag) => {
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

export const CountBadge = (props) => {
    const { count } = props;
    if (count === undefined) {
        return null;
    } else {
        return <Badge variant="light">{count}</Badge>;
    }
};

export default BlogPostTag;
