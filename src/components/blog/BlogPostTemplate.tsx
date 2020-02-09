import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LazyHero from 'react-lazy-hero';
import { graphql } from 'gatsby';
import SiteWrapper from '../common/SiteWrapper';
import Content, { HTMLContent } from '../common/Content';
import HelmetHead from '../common/Seo';
import '../../css/github-markdown.css';

import BlogPostTag from './BlogPostTag';

interface IBlogPostTemplate {
    content?: React.ReactNode;
    contentComponent?: (any) => any;
    description: string;
    tags: string[];
    title: string;
    helmet?: any;
    featuredimage?: any;
}

export const BlogPostTemplate = ({ content, contentComponent, description, tags, title, helmet, featuredimage }: IBlogPostTemplate) => {
    const PostContent = contentComponent || Content;

    return (
        <>
            <LazyHero
                imageSrc={featuredimage !== undefined && featuredimage.publicURL !== undefined ? featuredimage.publicURL : ''}
                color="#FFFFFF"
                opacity={0.8}
                minHeight="25vh"
                parallaxOffset={0.5}
                isCentered={true}
                transitionDuration={600}>
                <Row>
                    <Col>
                        <h1 data-testid="title">{title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>{tags && tags.length ? tags.map((tag, index) => <BlogPostTag key={index} tag={tag} />) : null}</Col>
                </Row>
            </LazyHero>
            <Container className="mt-5">
                {helmet || ''}
                <Row className="mt-5">
                    <Col className="markdown-body">
                        <PostContent content={content} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

interface IData {
    markdownRemark: any;
}

interface IBlogPost {
    data: IData;
}

const BlogPost = ({ data }: IBlogPost) => {
    const { markdownRemark: post } = data;

    return (
        <SiteWrapper>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={<HelmetHead title={post.frontmatter.title} />}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                featuredimage={post.frontmatter.featuredimage}
            />
        </SiteWrapper>
    );
};

export default BlogPost;

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
                featuredimage {
                    childImageSharp {
                        fluid(maxWidth: 120, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                    publicURL
                }
            }
        }
    }
`;
