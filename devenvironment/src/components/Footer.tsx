import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Jumbotron fluid className="mt-5">
        <Container>
          <p className="text-muted">
            This site was built using{" "}
            <a href="https://github.com/facebook/create-react-app">
              Create React App
            </a>
            , with <a href="https://www.typescriptlang.org/">TypeScript</a> to
            make it scalable (for no reason),{" "}
            <a href="https://github.com/stereobooster/react-snap">React-Snap</a>{" "}
            to make it static and performant,{" "}
            <a href="https://github.com/nfl/react-helmet">React Helmet</a> for
            SEO, and{" "}
            <a href="https://react-bootstrap.github.io/">React Bootstrap</a> to
            skin it. It's hosted on GitHub Pages, feel free to have a look at
            the{" "}
            <a href="https://github.com/dkershner6/dkershner6.github.io/tree/master/devenvironment">
              open source code
            </a>
            . This site is used for testing and changes very frequently, and
            items are often broken. In the past, it has been built with{" "}
            <a href="https://www.gatsbyjs.org/">GatsbyJS</a>,{" "}
            <a href="https://jekyllrb.com/">Jekyll</a>, WordPress, PHP, and Raw
            HTML<a href="/r">.</a>
          </p>
        </Container>
      </Jumbotron>
    </footer>
  );
};

export default Footer;
