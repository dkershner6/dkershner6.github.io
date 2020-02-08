import React, { useState, ReactElement } from 'react';
import { Row, Col, Card, Collapse } from 'react-bootstrap';

import PortfolioDesignSectionProps from '../../interfaces/PortfolioDesignProps';
import { PortfolioDesignService } from './PortfolioDesignService';

const PortfolioDesignSection = (props: PortfolioDesignSectionProps): JSX.Element => {
    const [open, setOpen] = useState(true);

    const { project, sectionId, sectionName, headerBg, headerText } = props;
    return (
        <Row id={props.sectionId} className="mt-3">
            <Col>
                <Card bg={headerBg} text={headerText}>
                    <Card.Header data-testid={`header-${sectionName}`} style={{ cursor: 'pointer' }} onClick={(): void => setOpen(!open)}>
                        <h3>{sectionName}</h3>
                    </Card.Header>
                    <Collapse data-testid={`collapse-${sectionName}`} in={open}>
                        <Card.Body>
                            <Row>
                                {project[sectionId].map(
                                    (dataSection, index): ReactElement => (
                                        <PortfolioDesignService key={index} project={project} dataSection={dataSection} sectionId={sectionId} />
                                    )
                                )}
                            </Row>
                        </Card.Body>
                    </Collapse>
                </Card>
            </Col>
        </Row>
    );
};

export default PortfolioDesignSection;
