import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Collapse
} from "react-bootstrap";

import PortfolioDesignSectionProps from "../../interfaces/PortfolioDesignProps";

const PortfolioDesignSection = (props: PortfolioDesignSectionProps) => {
  const {
    project,
    sectionId,
    sectionName,
    headerBg,
    headerText,
    getOpen,
    toggleOpen
  } = props;
  return (
    <Row className="mt-3">
      <Col>
        <Card bg={headerBg} text={headerText}>
          <Card.Header
            style={{ cursor: "pointer" }}
            onClick={() => toggleOpen(sectionId)}
          >
            <h3>{sectionName}</h3>
          </Card.Header>
          <Collapse in={getOpen(sectionId)}>
            <Card.Body>
              <Row>
                {project[sectionId].map((dataSection, index) => (
                  <Col
                    key={index}
                    className="mt-3"
                    xs="12"
                    xl={project[sectionId].length > 1 ? "6" : "12"}
                  >
                    <Card bg="secondary" text="dark">
                      <Card.Header
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleOpen(dataSection.id)}
                      >
                        <h4>{dataSection.name}</h4>
                      </Card.Header>
                      <Collapse in={getOpen(dataSection.id)}>
                        <ListGroup>
                          {dataSection.attributes.map(
                            (dataSectionAttribute, iindex) => (
                              <ListGroupItem
                                key={iindex}
                                action={dataSectionAttribute.link !== undefined}
                                href={dataSectionAttribute.link}
                                target="_blank"
                              >
                                <Row>
                                  <Col xs="12" md="3">
                                    <strong>
                                      {dataSectionAttribute.name}:
                                    </strong>
                                  </Col>
                                  <Col xs="12" md="9">
                                    {dataSectionAttribute.value}
                                  </Col>
                                </Row>
                              </ListGroupItem>
                            )
                          )}
                        </ListGroup>
                      </Collapse>

                      {dataSection.reasons !== undefined &&
                        dataSection.reasons.length > 0 && (
                          <Collapse in={getOpen(dataSection.id)}>
                            <Card.Footer>
                              <Row>
                                <Col>
                                  <p>
                                    <strong>Reasons:</strong>
                                  </p>
                                  <ul>
                                    {dataSection.reasons.map(
                                      (reason, iiindex) => (
                                        <li key={iiindex}>{reason}</li>
                                      )
                                    )}
                                  </ul>
                                </Col>
                              </Row>
                            </Card.Footer>
                          </Collapse>
                        )}
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Collapse>
        </Card>
      </Col>
    </Row>
  );
};

export default PortfolioDesignSection;
