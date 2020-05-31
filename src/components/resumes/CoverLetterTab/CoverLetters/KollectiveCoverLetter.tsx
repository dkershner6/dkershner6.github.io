import React from 'react';

const KollectiveCoverLetter = () => {
    return (
        <>
            <h3>To Kollective Hiring Manager:</h3>
            <p className="mt-3">
                I recently came into some additional time availability, and am
                looking to utilize it to experience something new. While my
                skills may tend towards the web, Kollective seems to have some
                interesting technologies in play and I think the skills I can
                bring to the table are a solid fit within them as many of the
                technologies share language (C# for ASP.NET Core is the same C#
                used in WPF, Console, and other .NET apps).
            </p>
            <p>
                On the server side of things, I do tend to lean heavier into
                containers & Kubernetes, but in recent past I have solid
                experience with Windows Server bare metal and some VMs.
            </p>
            <div>
                I think you will find my skillset and experience to be quite
                well-rounded and a solid match for many of the job requirements
                you have laid out in the C# Enginner position:
                <ul>
                    <li>
                        I have a proven track record by running many
                        distributed, microservices based applications in the
                        cloud, mostly built in .NET core, for the past 6 years.
                    </li>
                    <li>
                        Because I work in startups under constrained resources,
                        automating deployments was a complete must, and so CI/CD
                        and DevOps practices are a built-in mindset for me.
                    </li>
                    <li>
                        Kubernetes is my environment of choice for any business
                        critical app, and I have had a great experience
                        maintaining uptime and availability within clusters for
                        several years (right about when Kubernetes became stable
                        and popular).
                    </li>
                    <li>
                        I spend nearly all of my time consuming and constructing
                        APIs and User Interfaces.
                    </li>
                    <li>
                        I love to learn new things, and spend my free time
                        watching courses on{' '}
                        <a
                            href="https://app.pluralsight.com/profile/dkershner"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Pluralsight
                        </a>
                        .
                    </li>
                </ul>
            </div>
            <p>
                If you want more information than I have provided in either my
                resume or this cover letter, please see my{' '}
                <a
                    href="https://www.linkedin.com/in/derek-kershner-54b3392/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                .
            </p>
        </>
    );
};

export default KollectiveCoverLetter;
