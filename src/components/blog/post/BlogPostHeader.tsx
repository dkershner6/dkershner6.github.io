import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LazyHero from 'react-lazy-hero';
import BlogPostTag from './BlogPostTag';
import { IBlogPostTemplate } from './BlogPostTemplate';

export const BlogPostHeader = (props: IBlogPostTemplate) => {
    const { featuredimage, description, tags, title } = props;
    return (
        <LazyHero imageSrc={featuredimage} color="#FFFFFF" opacity={0.8} minHeight="25vh" parallaxOffset={0.5} isCentered={true} transitionDuration={600}>
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
    );
};
