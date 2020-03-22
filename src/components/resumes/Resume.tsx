import React, { useState } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';

import CoverLetterTab from './CoverLetterTab';
import ResumeTab from './ResumeTab';
import makeRange from '../../utils/MakeRange';

interface IResume {
    company: string;
}

const Resume = (props: IResume) => {
    const [activeTab, setActiveTab] = useState('cover');

    const { company } = props;
    const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : undefined;
    const format = urlParams === undefined ? '' : urlParams.get('format');

    if (format === 'print') {
        return (
            <Container className="mt-5">
                <TabChooser company={company} activeTab={'resume'} />
            </Container>
        );
    } else if (format === 'printCover') {
        return (
            <Container className="mt-5">
                <TabChooser company={company} activeTab={'cover'} />
            </Container>
        );
    } else if (format === 'printCombined') {
        return (
            <Container className="mt-5">
                <TabChooser company={company} activeTab={'cover'} />
                {makeRange(0, 15).map((number, index) => (
                    <br key={index} />
                ))}
                <TabChooser company={company} activeTab={'resume'} />
            </Container>
        );
    } else {
        return (
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <ButtonGroup>
                            <Button variant={activeTab === 'cover' ? 'primary' : 'secondary'} onClick={() => setActiveTab('cover')}>
                                Cover Letter
                            </Button>
                            <Button variant={activeTab === 'resume' ? 'primary' : 'secondary'} onClick={() => setActiveTab('resume')}>
                                Resume
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <TabChooser company={company} activeTab={activeTab} />
            </Container>
        );
    }
};

const TabChooser = (props) => {
    if (props.activeTab === 'cover') {
        return <CoverLetterTab company={props.company} />;
    } else {
        return <ResumeTab company={props.company} />;
    }
};

export default Resume;
