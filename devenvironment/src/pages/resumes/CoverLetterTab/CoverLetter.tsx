import React from "react";
import { Row, Col } from "react-bootstrap";

const CoverLetterTab = props => {
  return (
    <Row className="mt-3">
      <Col>
        <hr />
        <h3>To Inseego Hiring Manager:</h3>
        <p className="mt-3">
          I recently came into some additional time availability, and am looking
          to utilize it to experience something new. I have always been
          interested in the Internet of Things, so Inseego is a great fit.
        </p>
        <p>
          I think you will find my skillset and experience to be quite
          well-rounded and a solid match for many of the job requirements you
          have laid out in the{" "}
          <a href="https://inseego.catsone.com/careers/61616-San-Diego/jobs/12120830-Senior-Web-Developer-Eugene-OR-San-Diego-CA-or-Remote/">
            Senior Web Developer contract position
          </a>
          :
          <ul>
            <li>
              I have a proven track record by running many distributed,
              microservices based applications in the cloud for the past 6
              years.
            </li>
            <li>
              I am a ployglot programmer able to be productive in several
              languages.
            </li>
            <li>
              I have experience in all the clouds, and while I have the most
              experience in Azure, I believe the providers are similar enough
              for there to be much carryover to the others.
            </li>
            <li>
              I spend nearly all of my time consuming and constructing APIs and
              User Interfaces.
            </li>
            <li>
              I love to learn new things, and spend my free time watching
              courses on{" "}
              <a href="https://app.pluralsight.com/profile/dkershner">
                Pluralsight
              </a>
              .
            </li>
          </ul>
        </p>
        <p>
          If you want more information than I have provided in either my resume
          or this cover letter, please see my{" "}
          <a href="https://www.linkedin.com/in/derek-kershner-54b3392/">
            LinkedIn
          </a>
          . You may also ask DelRay Davis, a current employee of yours, as he
          knows me very well.
        </p>
        <p>
          I look forward to the challenge. Thank you for your consideration.
        </p>
        <h5>Sincerely,</h5>
        <h4 className="mt-2">Derek Kershner</h4>
        <hr />
      </Col>
    </Row>
  );
};

export default CoverLetterTab;
