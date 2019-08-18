import React from "react";
import LazyHero from "react-lazy-hero";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <LazyHero
          imageSrc="/img/blog-index.jpg"
          minHeight={"25vh"}
          isFixed={true}
          isCentered={true}
          transitionDuration={600}
        >
          <h1>Blog</h1>
        </LazyHero>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
