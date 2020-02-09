import React from 'react';
import { Link } from 'gatsby';
import { Row, Col, Button } from 'react-bootstrap';
import BlogPostTag from './BlogPostTag';
import ITechnology from '../technology/ITechnology';
import { IBlogListPage } from './BlogListPage';

interface IBlogListTagFilter extends IBlogListPage {
    technology: ITechnology;
}

export const BlogListTagFilter = (props: IBlogListTagFilter) => {
    const { tag, data, technology } = props;
    const hasTag = tag !== undefined;
    const { allMarkdownRemark } = data;
    const { group: tags } = allMarkdownRemark;
    if (!hasTag) {
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
                            {tags.map((tag, index) => (
                                <BlogPostTag key={index} tag={tag.fieldValue} count={tag.totalCount} tagLink={true} />
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
        );
    }
};

export default BlogListTagFilter;
