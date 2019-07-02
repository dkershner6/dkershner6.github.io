import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";

const About = () => {
  return (
    <React.Fragment>
      {/*<HelmetHead title='About | DKershner.com' />*/}
      <Jumbotron fluid className="bg-dark text-light">
        <Container className="mt-5">
          <h2 id="about" className="display-4 text-center">
            Full-Stack Cloud Native
          </h2>
          <ul>
            <li>
              Kubernetes has proven itself a valuable ally for the reliability
              sought for business critical applications. At time of writing, we
              have 70+ pods deployed in 2 clusters. The pods consist of
              everything from ASP.Net Core to Redis.
            </li>
            <li>
              From the start of serverless technology's existence, I have whole
              heartedly embraced the cutting edge of the technology. In this
              effort, Azure Functions V2 (.Net Core 2.0) are one of the primary
              vehicles for our software and provide the data processing and
              simple APIs.
            </li>
            <li>
              ASP.Net Core in combination with Entity Framework Core make a
              beautiful, easy to create, and performant solution to Sites and
              APIs, with piles of middleware to boot.
            </li>
            <li>
              React combined into ASP.Net Core (or deployed separately for
              simple sites like this one) gives all the interactivity to the
              interface one could desire. I have found layering TypeScript over
              React makes the code much, much less error prone.
            </li>
            <li>
              Azure DevOps has saved me countless hours of deployments by
              automating everything. Since we use GitOps for our configuration,
              everything is is handled automatically, soup to nuts.
            </li>
          </ul>
        </Container>
      </Jumbotron>
    </React.Fragment>
  );
};

export default About;
