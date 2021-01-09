import React, { ReactElement } from 'react';

import { Container } from 'react-bootstrap';
import LazyHero from 'react-lazy-hero';

import BlogListTagFilter from './BlogListTagFilter';
import BlogRoll from './BlogRoll';
import { IBlogRollPost } from './IBlogRollPost';

export interface IBlogListTemplate {
    posts: IBlogRollPost[];
    tag?: string;
}

const BlogListTemplate = (props: IBlogListTemplate): ReactElement => {
    const { tag, posts } = props;
    const hasTag = tag !== undefined;

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
                    <h1>{hasTag ? `Blog - ${tag}` : 'Blog'}</h1>

                    <BlogListTagFilter {...props} />
                </Container>
            </LazyHero>

            <Container className="mt-5">
                <BlogRoll posts={posts} />
            </Container>
        </>
    );
};

export default BlogListTemplate;
