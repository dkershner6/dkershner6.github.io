import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';
import SiteWrapper from '../common/SiteWrapper';

import properCase from '../../utils/ProperCase';

import { technologies } from '../../data/Technologies';
import TechnologyBadge from './TechnologyBadge';
import SkillDisplay from '../common/SkillDisplay';

import { getProjectsForTechnology } from './ITechnology';

interface ITechnology {
    data: any;
    pageContext: any;
}

const TechnologyTemplate = (props: ITechnology) => {
    const { data, pageContext } = props;
    const posts = data?.allMarkdownRemark?.edges;
    const postLinks = posts.map(post => (
        <li key={post.node.fields.slug}>
            <h5>
                <a href={`${post.node.fields.slug}`}>{post.node.frontmatter.title}</a>
            </h5>
        </li>
    ));

    const technologyId = pageContext.techId;
    const technology = technologies.filter(technology => technology.id === technologyId)[0];
    const projects = getProjectsForTechnology(technology);
    return (
        <SiteWrapper>
            <Helmet title={`${technology.label}`} />
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h1 className="display-3">{technology.label}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TechnologyBadge technology={technology} />
                    </Col>
                </Row>
                {technology.link !== undefined && (
                    <Row className="mt-3">
                        <Col>
                            <a href={technology.link} target="_blank" rel="noopener noreferrer">
                                <h4>{technology.label} Documentation</h4>
                            </a>
                        </Col>
                    </Row>
                )}
                <Row className="mt-3">
                    <Col>
                        <Row>
                            <Col>
                                <strong>Technology Type:</strong>
                            </Col>
                            <Col>{properCase(technology.type)}</Col>
                        </Row>
                    </Col>
                    {technology.language !== undefined && (
                        <Col>
                            <Row>
                                <Col xs="auto">
                                    <strong>Language:</strong>
                                </Col>
                                <Col>{technology.language}</Col>
                            </Row>
                        </Col>
                    )}
                    <Col>
                        <Row>
                            <Col xs="auto">
                                <strong>Personal Familiarity:</strong>
                            </Col>
                            <Col>
                                <SkillDisplay filled={technology.familiarity} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {projects !== undefined && projects.length > 0 && (
                    <>
                        <Row className="mt-5">
                            <Col>
                                <h4>Portfolio Projects that use this technology:</h4>
                                <ul>
                                    {projects.map((project, index) => (
                                        <li key={index}>
                                            <h5>
                                                <a href={`/portfolio/${project.id}`}>{project.name}</a> uses this technology in {project.uses} service
                                                {project.uses > 1 && 's'}
                                            </h5>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </>
                )}
                {postLinks.length > 0 && (
                    <>
                        <Row className="mt-5">
                            <Col>
                                <h4>Posts written about this technology:</h4>

                                <ul>{postLinks}</ul>
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
        </SiteWrapper>
    );
};

export default TechnologyTemplate;
