import React from 'react';
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';

import BlogPostTag from '../post/BlogPostTag';
import { IBlogRollPost } from './IBlogRollPost';

const BlogRollPost = (props) => {
    const { post }: { post: IBlogRollPost } = props;
    return (
        <Col key={post.id} xs="12" lg="6" className="mt-3">
            <Row>
                <Col xs="6">
                    <Link href={`/blog/${post.id}`}>
                        <a href={`/blog/${post.id}`}>
                            <img width="100%" src={post.featuredimage} alt={`featured image thumbnail for post ${post.title}`} />
                        </a>
                    </Link>
                </Col>
                <Col xs="6">
                    <Link href={`/blog/${post.id}`}>
                        <a href={`/blog/${post.id}`}>
                            <h5>{post.title}</h5>
                        </a>
                    </Link>
                    <p>{post.date}</p>
                    <p className="small">{post.description}</p>
                    <p>{post?.tags?.length ? post.tags.map((tag, index) => <BlogPostTag key={index} tag={tag} />) : ''}</p>
                </Col>
            </Row>
        </Col>
    );
};

export default BlogRollPost;
