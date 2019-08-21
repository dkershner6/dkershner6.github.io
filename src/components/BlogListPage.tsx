import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { startCase } from 'lodash';
import LazyHero from 'react-lazy-hero';

import Layout from './Layout';
import BlogRoll, { BlogRollProps } from './BlogRoll';
import BlogPostTag from './BlogPostTag';
import HelmetHead from './Seo';

interface BlogListPageProps extends BlogRollProps {
  tag?: string;
}

const BlogListPage = (props: BlogListPageProps) => {
  const { data } = props;
  const { allMarkdownRemark } = data;
  const { group: tags } = allMarkdownRemark;
  if (props.tag === undefined) {
    return (
      <React.Fragment>
        <HelmetHead title='Blog' />
        <Layout>
          <LazyHero
            imageSrc='/img/blog-index.jpg'
            minHeight={'30vh'}
            isFixed={true}
            isCentered={true}
            transitionDuration={600}
          >
            <Container>
              <h1>Blog</h1>
              <Row className='mt-5'>
                <Col>
                  <Row>
                    <Col>
                      <p className='small'>Filter by Tag</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {tags.map((tag, index) => (
                        <BlogPostTag
                          key={index}
                          tag={tag.fieldValue}
                          count={tag.totalCount}
                          tagLink={true}
                        />
                      ))}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </LazyHero>

          <Container className='mt-5'>
            <BlogRoll data={props.data} />
          </Container>
        </Layout>
      </React.Fragment>
    );
  } else {
    const { tag } = props;
    const displayTag = startCase(tag.toLowerCase());
    return (
      <React.Fragment>
        <HelmetHead title={`Blog - ${displayTag}`} />
        <Layout>
          <LazyHero
            imageSrc='/img/blog-index.jpg'
            minHeight={'30vh'}
            isFixed={true}
            isCentered={true}
            transitionDuration={600}
          >
            <Container>
              <Row>
                <Col>
                  <h1>Blog - {displayTag}</h1>
                </Col>
              </Row>
              <Row className='mt-5'>
                <Col>
                  <Link to='/blog'>
                    <Button variant='primary'>Remove Filter</Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </LazyHero>
          <Container className='mt-5'>
            <BlogRoll data={props.data} />
          </Container>
        </Layout>
      </React.Fragment>
    );
  }
};

export default BlogListPage;
