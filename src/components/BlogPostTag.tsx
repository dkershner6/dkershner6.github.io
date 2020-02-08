import React from 'react';
import { Link } from 'gatsby';
import { Badge } from 'react-bootstrap';
import { startCase } from 'lodash';

import TechnologyBadge, { CountBadge } from './TechnologyBadge';
import { getTechnologyById } from '../classes/Technology';

interface BlogPostTagProps {
    key?: number;
    tag: string;
    count?: number;
    tagLink?: boolean;
}

const BlogPostTag = (props: BlogPostTagProps) => {
    const { tag, tagLink } = props;
    if (tagLink === undefined || tagLink === false) {
        return <InnerBlogPostTag {...props} />;
    } else {
        return (
            <Link to={`/blog/tags/${tag}`}>
                <InnerBlogPostTag {...props} />
            </Link>
        );
    }
};

const InnerBlogPostTag = ({ tag, count, tagLink }: BlogPostTagProps) => {
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
