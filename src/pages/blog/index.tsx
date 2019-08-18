import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Button } from 'react-bootstrap';
import LazyHero from 'react-lazy-hero';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <LazyHero
          imageSrc='/img/blog-index.jpg'
          minHeight={'25vh'}
          isFixed={true}
          isCentered={true}
          transitionDuration={600}
        >
          <h1>Blog</h1>
        </LazyHero>
        <Container className='mt-5'>
          <Row className='text-center'>
            <Col>
              <Link to='/technologies'>
                <Button>Filter by Technology</Button>
              </Link>
            </Col>
          </Row>
          <BlogRoll />
        </Container>
      </Layout>
    );
  }
}
