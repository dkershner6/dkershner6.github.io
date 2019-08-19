import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import LazyHero from "react-lazy-hero";
import { Container, Row, Col, Button } from "react-bootstrap";
import Arrow from "react-arrow";
import { Link as ScrollLink } from "react-scroll";
import HelmetHead from "../components/Seo";

import Layout from "../components/Layout";

import About from "../components/About";
import PortfolioMenu from "../components/PortfolioMenu";
import Social from "../components/Social";

export const IndexPageTemplate = ({ image, title, heading, subheading }) => (
  <React.Fragment>
    <HelmetHead title={title} />
    <LazyHero
      imageSrc={
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      }
      color="#000000"
      opacity={0.2}
      minHeight="100vh"
      parallaxOffset={0.5}
      isCentered={true}
      transitionDuration={600}
    >
      <Container>
        <Row>
          <Col>
            <h1>
              <strong>
                <span className="display-4 text-primary">{">"}</span>
                <span className="display-4 text-white">{heading}</span>
                <span className="display-4 text-primary">{"<"}</span>
              </strong>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="text-white">{subheading}</h4>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <ScrollLink to="about" smooth={true}>
              <Button variant="primary">
                <Arrow
                  direction="down"
                  shaftWidth={25}
                  shaftLength={25}
                  headWidth={50}
                  headLength={25}
                  fill="white"
                  stroke="white"
                  strokeWidth={1}
                />
              </Button>
            </ScrollLink>
          </Col>
        </Row>
      </Container>
    </LazyHero>
    <About />
    <PortfolioMenu />
    <Social />
  </React.Fragment>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`;
