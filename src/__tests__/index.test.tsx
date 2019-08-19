import React from "react";
import ReactDOM from "react-dom";
import { IndexPageTemplate } from "../templates/index-page";

describe("Index", () => {
  it("renders without crashing", () => {
    const data = {
      markdownRemark: {
        frontmatter: {
          templateKey: "index-page",
          title: "Derek Kershner",
          image: "/img/hero-background.jpg",
          heading: "Derek Kershner",
          subheading:
            "Full-stack Software Engineer, DevOps Practitioner, & Cloud Architect"
        }
      }
    };
    const { frontmatter } = data.markdownRemark;
    const div = document.createElement("div");
    ReactDOM.render(
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
