import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import LazyHero from 'react-lazy-hero';
import Arrow from 'react-arrow';
import { Link as ScrollLink } from 'react-scroll';

import PortfolioProps from '../../interfaces/PortfolioProps';

const PortfolioHeader = (props: PortfolioProps) => {
  const { project, menu } = props;
  return (
    <LazyHero
      imageSrc={project.imageSrc}
      color={project.heroTint}
      opacity={0.6}
      minHeight={menu || project.short ? '500px' : '900px'}
      isFixed={true}
      isCentered={true}
      transitionDuration={600}
    >
      <h1
        className={
          menu ? 'text-center text-white' : 'display-4 text-center text-white'
        }
      >
        {project.name}
      </h1>
      <Container>
        <Row className='justify-content-center'>
          <Col className='text-left text-white' xl='9'>
            {!menu && <h4>Project Specification</h4>}
            <ul>
              {project.specification.map((specItem, index) => (
                <li key={index}>{specItem}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row
          className={
            menu ? 'justify-content-center' : 'justify-content-center mt-5'
          }
        >
          <Col className='text-center'>
            <PortfolioHeaderButton {...props} />
          </Col>
        </Row>
      </Container>
    </LazyHero>
  );
};

const PortfolioHeaderButton = (props: PortfolioProps) => {
  const { project, menu } = props;
  if (menu) {
    return (
      <Button
        variant={project.bootstrapVariant}
        href={`/portfolio/${project.id}`}
      >
        {project.id === 'codeChallenges'
          ? 'See the List'
          : 'See Complete Application Design'}
      </Button>
    );
  } else {
    return (
      <ScrollLink to='design' smooth={true}>
        <Button variant={project.bootstrapVariant}>
          <Arrow
            direction='down'
            shaftWidth={25}
            shaftLength={25}
            headWidth={50}
            headLength={25}
            fill='white'
            stroke='white'
            strokeWidth={1}
          />
        </Button>
      </ScrollLink>
    );
  }
};

export default PortfolioHeader;
