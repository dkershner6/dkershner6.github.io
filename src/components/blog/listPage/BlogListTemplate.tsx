import React from 'react';
import { Container } from 'react-bootstrap';
import { startCase } from 'lodash';
import LazyHero from 'react-lazy-hero';

import BlogRoll from './BlogRoll';
import { getTechnologyById } from '../../technology/ITechnology';
import { BlogListTagFilter } from './BlogListTagFilter';
import { IBlogRollPost } from './IBlogRollPost';

export interface IBlogListTemplate {
    posts: IBlogRollPost[];
    tag?: string;
}

const BlogListTemplate = (props: IBlogListTemplate) => {
    const { tag, posts } = props;
    const hasTag = tag !== undefined;
    const technology = hasTag ? getTechnologyById(tag) : undefined;
    const displayTag =
        technology === undefined
            ? hasTag
                ? startCase(tag.toLowerCase())
                : undefined
            : technology.label;

    return (
        <>
            <LazyHero
                imageSrc="/img/blog-index.jpg"
                minHeight={'30vh'}
                isFixed={true}
                isCentered={true}
                transitionDuration={600}
            >
                <Container>
                    <h1>{hasTag ? `Blog - ${displayTag}` : 'Blog'}</h1>

                    <BlogListTagFilter {...props} technology={technology} />
                </Container>
            </LazyHero>

            <Container className="mt-5">
                <BlogRoll posts={posts} />
            </Container>
        </>
    );
};

export default BlogListTemplate;
