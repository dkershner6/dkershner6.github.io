import React, { ReactElement, useState } from 'react';
import { Jumbotron, Tabs, Tab, Container } from 'react-bootstrap';
import SaaSProjects from './SaaSProjects';
import OpenSourceProjects from './OpenSourceProjects';
import CodeChallenges from './CodeChallenges';
import CommunityServiceProjects from './CommunityServiceProjects';

const Projects = (): ReactElement => {
    const [activeTab, setActiveTab] = useState('saas');

    return (
        <Jumbotron id="projects" className="bg-secondary">
            <Container style={{ minHeight: '25rem' }}>
                <h2 className="display-4 text-center">Projects</h2>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={activeTab}
                    onSelect={(tabName) => setActiveTab(tabName)}
                >
                    <Tab eventKey="saas" title="SaaS Tools">
                        <SaaSProjects />
                    </Tab>
                    <Tab eventKey="opensource" title="Open Source Software">
                        <OpenSourceProjects />
                    </Tab>
                    <Tab eventKey="codechallenges" title="Code Challenges">
                        <CodeChallenges />
                    </Tab>
                    <Tab eventKey="communityservice" title="Community Service">
                        <CommunityServiceProjects />
                    </Tab>
                </Tabs>
            </Container>
        </Jumbotron>
    );
};

export default Projects;
