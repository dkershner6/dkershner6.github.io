import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { startCase } from 'lodash';
import LazyHero from 'react-lazy-hero';

import Layout from './Layout';
import BlogRoll, { BlogRollProps } from './BlogRoll';
import BlogPostTag from './BlogPostTag';
import HelmetHead from './Seo';
import { getTechnologyById } from '../classes/Technology';

interface BlogListPageProps extends BlogRollProps {
    tag?: string;
}

const BlogListPage = (props: BlogListPageProps) => {
    const { data } = props;
    if (props.tag === undefined) {
        return (
            <>
                <HelmetHead title="Blog" />
                <Layout>
                    <BlogListInnerPage {...props} />
                </Layout>
            </>
        );
    } else {
        const { tag } = props;
        const technology = getTechnologyById(tag);
        const displayTag = technology === undefined ? startCase(tag.toLowerCase()) : technology.label;
        return (
            <>
                <HelmetHead title={`Blog - ${displayTag}`} />
                <Layout>
                    <LazyHero imageSrc="/img/blog-index.jpg" minHeight={'30vh'} isFixed={true} isCentered={true} transitionDuration={600}>
                        <>
                            <Row>
                                <Col xs="12">
                                    <h1>Blog - {displayTag}</h1>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col className="align-self-center">
                                    <Link to="/blog">
                                        <Button variant="primary">Remove Filter</Button>
                                    </Link>
                                </Col>
                                {technology !== undefined && (
                                    <Col className="align-self-center">
                                        <Link to={`/technologies/${technology.type}/${technology.id}`}>
                                            <Button variant="info">Info On This Tech</Button>
                                        </Link>
                                    </Col>
                                )}
                            </Row>
                        </>
                    </LazyHero>
                    <Container className="mt-5">
                        <BlogRoll data={props.data} />
                    </Container>
                </Layout>
            </>
        );
    }
};

const BlogListInnerPage = (props: BlogListPageProps) => {
    const { data } = props;
    const { allMarkdownRemark } = data;
    const { group: tags } = allMarkdownRemark;

    return (
        <>
            <LazyHero imageSrc="/img/blog-index.jpg" minHeight={'30vh'} isFixed={true} isCentered={true} transitionDuration={600}>
                <Container>
                    <h1>Blog</h1>
                    <Row className="mt-5">
                        <Col>
                            <Row>
                                <Col>
                                    <p className="small">Filter by Tag</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {tags.map((tag, index) => (
                                        <BlogPostTag key={index} tag={tag.fieldValue} count={tag.totalCount} tagLink={true} />
                                    ))}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </LazyHero>

            <Container className="mt-5">
                <BlogRoll data={props.data} />
            </Container>
        </>
    );
};

export default BlogListPage;
export { BlogListInnerPage };
