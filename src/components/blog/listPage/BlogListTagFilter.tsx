import React, { ReactElement } from 'react';

import { Row, Col, Button } from 'react-bootstrap';

import BlogPostTag from '../post/BlogPostTag';

import { IBlogListTemplate } from './BlogListTemplate';

const BlogListTagFilter = (props: IBlogListTemplate): ReactElement => {
    const { tag, posts } = props;
    const hasTag = tag !== undefined;

    if (!hasTag) {
        const allTagsUsed = [
            ...new Set(posts.map((post) => post.tags).flat())
        ] as string[];
        const tagsWithCount = allTagsUsed.map((tag) => ({
            tag,
            count: posts.filter((post) => post.tags.includes(tag)).length
        }));

        return (
            <Row className="mt-5">
                <Col>
                    <Row>
                        <Col>
                            <p className="small">Filter by Tag</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {tagsWithCount.map((tagWithCount, index) => (
                                <BlogPostTag
                                    key={index}
                                    tag={tagWithCount.tag}
                                    count={tagWithCount.count}
                                />
                            ))}
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    } else {
        return (
            <Row className="mt-5">
                <Col className="align-self-center">
                    <a href="/blog">
                        <Button variant="primary">Remove Filter</Button>
                    </a>
                </Col>
            </Row>
        );
    }
};

export default BlogListTagFilter;
