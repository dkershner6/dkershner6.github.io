import React from "react";

const SyrinxCoverLetter = () => {
  return (
    <React.Fragment>
      <h3>To Syrinx Hiring Manager:</h3>
      <p className="mt-3">
        My education is in finance and my recent experience is both in software
        development and finance while consulting inside of several startups. I
        believe this, combined with my ability to effectively and efficiently
        organize and communicate, make me an ideal candidate for your company.
      </p>
      <div>
        I think you will find my skillset and experience to be quite
        well-rounded and a solid match for many of the job requirements you have
        laid out in the{" "}
        <a
          href="https://www.linkedin.com/jobs/view/1092135490/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Senior .NET Developer (Remote flexibility) position
        </a>
        :<h4 className="mt-2">Dependable</h4>
        <ul>
          <li>
            I have a proven track record by planning, architecting, developing,
            testing, deploying, running, monitoring, and optimizing many
            distributed, microservices based applications in the cloud for the
            past 6 years. This extends all the way from top to bottom, from the
            data stack to automated deployments using infrastructure as code. My{" "}
            <a href="https://dkershner.com">portfolio</a> has some examples of
            how I design.
          </li>
          <li>I am never one to overpromise and underdeliver. Ever.</li>
        </ul>
        <h4 className="mt-2">Applicable</h4>
        <ul>
          <li>
            I am a polyglot programmer able to be productive in several
            languages. You have specifically called out C#, which is my
            strongest backend language. In addition, I am very capable in React
            and JavaScript (using TypeScript,{" "}
            <a href="https://dkershner.com/r/syrinx">
              this letter and my resume
            </a>{" "}
            are written in React/TypeScript).
          </li>
          <li>
            I have experience in all the clouds, and while I have the most
            experience in Azure due to the way Amazon is viewed in the
            e-commerce world, I believe the providers are similar enough for
            there to be much carryover to the others.{" "}
            <strong>
              In addition, in preparation for this opportunity, I have taken AWS
              Certified Cloud Practitioner training.
            </strong>{" "}
            I have not yet taken the test, but am confident I could do so in a
            small amount of time.
          </li>
          <li>
            I manage developers using Agile methodology (albeit scrum-less due
            to offshore time zone issues) and am familiar with organizing work
            into bite-size, time-sensitive sprints for myself and others.
          </li>
          <li>
            I spend nearly all of my time consuming and constructing APIs and
            User Interfaces.
          </li>
          <li>My most utilized data storage is MS Sql Server (2017/19).</li>
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
    </React.Fragment>
  );
};

export default SyrinxCoverLetter;
