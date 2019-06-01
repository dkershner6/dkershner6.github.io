import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";

const About = () => {
  return (
    <React.Fragment>
      {/*<HelmetHead title='About | DKershner.com' />*/}
      <div
        id="about"
        className="page-header"
        style={{ padding: 40, margin: "auto" }}
      >
        <h1 className="text-center">About</h1>
      </div>
      <Jumbotron>
        <h2 className="text-center">Full-Stack Cloud Native</h2>
        <Container>
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
        <hr />
        <h3 className="text-center"> Find me on other platforms:</h3>

        <p className="text-center">
          <Button
            variant="outline-info"
            href="https://www.linkedin.com/in/derek-kershner-54b3392"
          >
            LinkedIn
          </Button>

          <Button variant="outline-info" href="https://github.com/dkershner6">
            GitHub
          </Button>

          <Button
            variant="outline-info"
            href="https://app.pluralsight.com/profile/dkershner"
          >
            Pluralsight
          </Button>
        </p>
      </Jumbotron>
    </React.Fragment>
  );
};

export default About;
