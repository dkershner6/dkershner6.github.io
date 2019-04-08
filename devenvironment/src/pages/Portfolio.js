import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Portfolio = () => {
 return (
   <Container>
     <div className='page-header' style={{padding: 40}}>
     <h1>Portfolio</h1>
     </div>
     <Jumbotron>
       <br />
     <h2> Babywise.life</h2>
<br />
<p><a href='https://babywise.life'><img width='100%' src='/babywise.jpg' /></a></p>
<br />
<p>Created several apps supporting the massive data behind this website including a search engine and gift registry.</p>
</Jumbotron>
<Jumbotron>
<h2>Babyearth.com</h2>
<br />
<p><a href='https://babyearth.com'><img width='100%' src='/babyearth.jpg' /></a></p>
<br />
<p>Created and maintained the entire backend infrastructure for the site, as well as numerous apps to aid on the front end, including several small React apps.</p>
     </Jumbotron>
   </Container>
 );
}

export default Portfolio;