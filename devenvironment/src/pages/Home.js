import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import HelmetHead from '../components/Seo';
import LazyHero from 'react-lazy-hero';

import About from './About';
import Portfolio from './Portfolio';

const Home = () => {
  return (
    <React.Fragment>
      <HelmetHead title='DKershner.com' />
      <LazyHero
        imageSrc='/hero-background.jpg'
        color='#000000'
        opacity={0.2}
        minHeight='100vh'
        parallaxOffset={0.5}
        isCentered={true}
        transitionDuration={600}
      >
        <h1>
          <strong>
            <span class='text-primary'>{'>'}</span>DKershner.com
            <span class='text-primary'>{'<'}</span>
          </strong>
        </h1>
        <h4>Full-stack Software Engineer, DevOps & Cloud Architect</h4>
        <h5>.Net Core, Kubernetes, Azure DevOps, Webpack</h5>
        <h6>C#, Bash, Powershell, Kubectl, Docker, React, Javascript</h6>
        <br />
        <LinkContainer to='/blog'>
          <Button size='lg' variant='primary'>
            Read the Blog
          </Button>
        </LinkContainer>
      </LazyHero>
      <About />
      <Portfolio />
    </React.Fragment>
  );
};

export default Home;
