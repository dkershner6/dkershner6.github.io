import React from 'react';
import Link from 'next/link';
import { Badge } from 'react-bootstrap';
import { startCase } from 'lodash';

import TechnologyBadge, { CountBadge } from '../../technology/TechnologyBadge';
import { getTechnologyById } from '../../technology/ITechnology';

interface IBlogPostTag {
    key?: number;
    tag: string;
    count?: number;
    tagLink?: boolean;
}

const BlogPostTag = (props: IBlogPostTag) => {
    const { tag, tagLink } = props;
    if (tagLink === undefined || tagLink === false) {
        return <InnerBlogPostTag {...props} />;
    } else {
        return (
            <Link href={`/blog/tags/${tag}`}>
                <a href={`/blog/tags/${tag}`}>
                    <InnerBlogPostTag {...props} />
                </a>
            </Link>
        );
    }
};

const InnerBlogPostTag = ({ tag, count, tagLink }: IBlogPostTag) => {
    const technology = getTechnologyById(tag);
    if (technology !== undefined) {
        return <TechnologyBadge pageLink={!(tagLink === true)} technology={technology} count={count} />;
    } else {
        return (
            <Badge pill variant="dark">
                {startCase(tag.toLowerCase())} <CountBadge count={count} />
            </Badge>
        );
    }
};

export default BlogPostTag;
