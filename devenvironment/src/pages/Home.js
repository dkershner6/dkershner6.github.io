import React from 'react';
import { Button } from 'react-bootstrap';
import HelmetHead from '../components/Seo';

const Home = () => {
  return (
    <React.Fragment>
      <HelmetHead title='DKershner.com' />
      <section className='hero'>
        <h1 className='display-3'>
          <strong>
            <span class='text-primary'>{'>'}</span>DKershner.com
            <span class='text-primary'>{'<'}</span>
          </strong>
        </h1>
        <h4>Software Engineer, DevOps & Cloud Architect</h4>
        <h5>.Net Core, Kubernetes, Azure DevOps, & ReactJS</h5>
        <br />
        <Button href='/blog' size='lg'>
          Read the Blog
        </Button>
      </section>

      <style jsx>
        {`
          body {
            height: 98%;
            background: url('/hero-background.jpg') no-repeat center center
              fixed;
            background-color: #2b3e50;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;
            -o-background-size: cover;
          }

          .hero {
            align-items: center;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            min-height: 100vh;
            height: 100px;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Home;
