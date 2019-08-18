import React from 'react';
import Layout from '../../components/Layout';
import { Container, Row, Col } from 'react-bootstrap';

import { resumes } from '../../components/resumes/ResumeTab/Resumes/GetResume';
import properCase from '../../utils/ProperCase';

const ResumesPage = () => {
  return (
    <Layout>
      <Container className='mt-5'>
        <Row className='mt-5'>
          <Col>
            <h1>Resumes</h1>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            {resumes.map((resume, index) => (
              <Row key={index}>
                <Col>
                  <a href={`/r/${resume.company}`}>
                    {properCase(resume.company)}
                  </a>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ResumesPage;
