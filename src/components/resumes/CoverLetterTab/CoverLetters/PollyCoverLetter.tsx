import React from "react";

const PollyCoverLetter = () => {
  return (
    <React.Fragment>
      <h3>To Polly Hiring Manager:</h3>
      <p className="mt-3">
        I have been a firm supporter and user of Slack for several years now. In
        managing a distributed team, I found it invaluable in keeping the team
        feeling connected. I never had a need for Polly, given we had so few
        employees, but I did see it in the store, and I even developed a little
        internal slackbot for our team.
      </p>
      <div>
        I think you will find my skillset and experience to be quite
        well-rounded and a solid match for many of the job requirements you have
        laid out in the{" "}
        <a
          href="https://www.linkedin.com/jobs/view/1304045399/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Senior Full Stack Software Engineer position
        </a>
        :<h4 className="mt-2">Dependable</h4>
        <ul>
          <li>
            I have a proven track record by planning, architecting, developing,
            testing, deploying, running, monitoring, and optimizing many
            distributed, microservices based applications in the cloud for the
            past 6 years. This extends all the way from top to bottom, from the
            data stack to automated deployments using infrastructure as code. My{" "}
            <a href="https://dkershner.com">portfolio</a> has some examples and
            principles of how I design.
          </li>
          <li>I am never one to overpromise and underdeliver. Ever.</li>
        </ul>
        <h4 className="mt-2">Applicable</h4>
        <ul>
          <li>
            I am a polyglot programmer able to be productive in several
            languages. You have specifically called out React, which is my
            strongest framework (
            <a href="https://dkershner.com/r/cbtNuggets">
              this letter and my resume
            </a>{" "}
            are written in React/TypeScript and use Babel/Webpack). I have lots
            of JS experience (I use TypeScript as I find it makes me more
            productive and the code more readable). I have learned Node, but
            will admit to having a lack of production experience due to
            primarily using C#. I am, however, happy to learn more, as I am
            finding JS more pleasurable to write with the modern ECMAScript
            releases.
          </li>
          <li>
            I have lots of experience with containers, as it is my favored and
            primary target for software. I am unsure if Kubernetes is in play,
            but given your scale, I would say that my experience there is likely
            valuable as well.
          </li>
          <li>
            I manage developers using Agile methodology (albeit scrum-less due
            to offshore time zone issues) and am familiar with organizing work
            into bite-size, time-sensitive sprints for myself and others. My
            communication and organization skills have been up to the task of
            keeping track of broad scopes in both projects and people.
          </li>
          <li>
            I have lots of experience in both relational (RDBMS / SQL) and
            non-relational (NoSQL) data structures. MSSQL and MySQL were the
            focus of the SQL side, and the NoSQL side is much broader, ranging
            from Key-Value stores like Redis or Table Storage, to Document
            stores like Mongo & Cosmos DB.
          </li>
          <li>
            I was also the DevOps/Site Reliability Engineer for all of our
            projects, and therefore have experience with Serverless, VMs,
            Proxies, and Containers. I could readily be the on-call engineer in
            short order.
          </li>
        </ul>
        <h4 className="mt-2">Self-Teachable</h4>
        <ul>
          <li>
            I love to learn new things, and spend my free time watching courses
            on{" "}
            <a
              href="https://app.pluralsight.com/profile/dkershner"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pluralsight
            </a>{" "}
            to ensure I stay up to date on best practices and learn new
            technologies.
          </li>
        </ul>
      </div>
      <p>
        If you want more information than I have provided in either my resume or
        this cover letter, please see my{" "}
        <a
          href="https://www.linkedin.com/in/derek-kershner-54b3392/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
      <p>
        P.S. I think your LinkedIn job posting is connected to a Spanish food
        company, not you guys.
      </p>
    </React.Fragment>
  );
};

export default PollyCoverLetter;
