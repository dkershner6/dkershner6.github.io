import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Content from '../../common/Content';
import { BlogPostHeader } from './BlogPostHeader';

export interface IBlogPostTemplate {
    content?: React.ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    contentComponent?: any;
    description: string;
    tags: string[];
    title: string;
    helmet?: unknown;
    featuredimage?: string;
}

export const BlogPostTemplate = (props: IBlogPostTemplate) => {
    const { content, contentComponent, helmet } = props;
    const PostContent = contentComponent || Content;
    return (
        <>
            <BlogPostHeader {...props} />
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
