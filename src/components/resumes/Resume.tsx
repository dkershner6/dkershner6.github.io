import React from 'react';
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  ButtonGroup,
  Button,
} from 'react-bootstrap';
import HelmetHead from '../../components/Seo';

import CoverLetterTab from './CoverLetterTab';
import ResumeTab from './ResumeTab';
import makeRange from '../../utils/MakeRange';
import properCase from '../../utils/ProperCase';

interface ResumeProps {
  company: string;
}

export default class Resume extends React.Component<ResumeProps> {
  state = {
    activeTab: 'cover',
  };

  render() {
    const { company } = this.props;
    const urlParams =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search)
        : undefined;
    const format = urlParams === undefined ? '' : urlParams.get('format');

    if (format === 'print') {
      return (
        <Container className='mt-5'>
          <TabChooser company={company} activeTab={'resume'} />
        </Container>
      );
    } else if (format === 'printCover') {
      return (
        <Container className='mt-5'>
          <TabChooser company={company} activeTab={'cover'} />
        </Container>
      );
    } else if (format === 'printCombined') {
      return (
        <Container className='mt-5'>
          <TabChooser company={company} activeTab={'cover'} />
          {makeRange(0, 15).map((number, index) => (
            <br key={index} />
          ))}
          <TabChooser company={company} activeTab={'resume'} />
        </Container>
      );
    } else {
      return (
        <Container className='mt-5'>
          <HelmetHead
            title={`Resume for ${properCase(company)} | DKershner.com`}
          />
          <Row className='justify-content-center'>
            <Col xs='auto'>
              <ButtonGroup>
                <Button
                  variant={
                    this.state.activeTab === 'cover' ? 'primary' : 'secondary'
                  }
                  onClick={() => this.setState({ activeTab: 'cover' })}
                >
                  Cover Letter
                </Button>
                <Button
                  variant={
                    this.state.activeTab === 'resume' ? 'primary' : 'secondary'
                  }
                  onClick={() => this.setState({ activeTab: 'resume' })}
                >
                  Resume
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
          <TabChooser company={company} activeTab={this.state.activeTab} />
        </Container>
      );
    }
  }
}

const TabChooser = props => {
  if (props.activeTab === 'cover') {
    return <CoverLetterTab company={props.company} />;
  } else {
    return <ResumeTab company={props.company} />;
  }
};
