import React from 'react';
import { Container } from 'react-bootstrap';
import { startCase } from 'lodash';
import LazyHero from 'react-lazy-hero';

import Layout from '../common/Layout';
import BlogRoll, { IBlogRoll } from './BlogRoll';
import HelmetHead from '../common/Seo';
import { getTechnologyById } from '../technology/ITechnology';
import { BlogListTagFilter } from './BlogListTagFilter';

export interface IBlogListPage extends IBlogRoll {
    tag?: string;
}

const BlogListPage = (props: IBlogListPage) => {
    return (
        <>
            <HelmetHead title={props.tag !== undefined ? `Blog - ${startCase(props.tag.toLowerCase())}` : 'Blog'} />
            <Layout>
                <BlogListTemplate {...props} />
            </Layout>
        </>
    );
};

const BlogListTemplate = (props: IBlogListPage) => {
    const { tag } = props;
    const hasTag = tag !== undefined;
    const technology = hasTag ? getTechnologyById(tag) : undefined;
    const displayTag = technology === undefined ? (hasTag ? startCase(tag.toLowerCase()) : undefined) : technology.label;

    return (
        <>
            <LazyHero imageSrc="/img/blog-index.jpg" minHeight={'30vh'} isFixed={true} isCentered={true} transitionDuration={600}>
                <Container>
                    <h1>{hasTag ? `Blog - ${displayTag}` : 'Blog'}</h1>

                    <BlogListTagFilter {...props} technology={technology} />
                </Container>
            </LazyHero>

            <Container className="mt-5">
                <BlogRoll data={props.data} />
            </Container>
        </>
    );
};

export default BlogListPage;
export { BlogListTemplate as BlogListInnerPage };
