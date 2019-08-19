import React from "react";

const TitanCoverLetter = () => {
  return (
    <React.Fragment>
      <h3>To Titan School Solutions Hiring Manager:</h3>
      <p className="mt-3">
        I have always had a passion for the educational system and for learning
        in general (I am a regular on Pluralsight), and know that every bit of
        efficiency that can be gained through improving tools for educators will
        pay massive dividends in the form of smarter students. I also noticed
        that nutrition is a part of the package you offer, and I have a massive
        interest in food as well. My experience on the operations side of
        business also makes communicating with non-technical co-workers very
        natural.
      </p>
      <div>
        I think you will find my skillset and experience to be quite
        well-rounded and a solid match for many of the job requirements you have
        laid out in the{" "}
        <a
          href="https://www.titank12.com/about/careers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Senior Full Stack Developer position
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
          <li>
            I have a demonstrated ability to organize and communicate
            effectively in a distributed work environment for the past 6 years.
          </li>
        </ul>
        <h4 className="mt-2">Applicable</h4>
        <ul>
          <li>
            I am a polyglot programmer able to be productive in several
            languages. You have specifically called out ASP.Net Core / C#, which
            is my strongest backend framework, and I use it with Entity
            Framework and SQL Server (2017/19) as well.
          </li>
          <li>
            I have lots of JS experience (I use TypeScript as I find it makes me
            more productive,{" "}
            <a href="https://dkershner.com/r/titan">
              this letter and my resume
            </a>{" "}
            are written in React/TypeScript). While I do not have Angular
            experience, I am very familiar with the way modern frameworks and
            Javascript work, and do have a touch of Vue experience.
          </li>
          <li>
            I have experience in all the clouds, and while I have the most
            experience in Azure, I believe the providers are similar enough for
            there to be much carryover to the others, with Azure and Google
            being the two closest (even in naming).
          </li>
          <li>
            I spend nearly all of my time consuming and constructing APIs and
            User Interfaces and I even have experience with Hangfire.
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
    </React.Fragment>
  );
};

export default TitanCoverLetter;
