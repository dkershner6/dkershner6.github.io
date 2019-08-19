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
import TechnologyBadge from "../../components/TechnologyBadge";
import { getTechnologiesFromAttributes } from "../../classes/ProjectAttribute";

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
    <Row id={props.sectionId} className="mt-3">
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
                    <Card id={dataSection.id} bg="secondary" text="dark">
                      <Card.Header
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleOpen(dataSection.id)}
                      >
                        <Row>
                          <Col>
                            <h4>{dataSection.name}</h4>
                          </Col>
                          <Col>
                            {getTechnologiesFromAttributes(
                              dataSection.attributes
                            ).map((technology, iindex) => (
                              <TechnologyBadge
                                key={iindex}
                                technology={technology}
                              />
                            ))}
                          </Col>
                        </Row>
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
                                    <strong
                                      className={
                                        dataSectionAttribute.name === "Example"
                                          ? "text-info"
                                          : ""
                                      }
                                    >
                                      {dataSectionAttribute.name}:
                                    </strong>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <p
                                      className={
                                        dataSectionAttribute.name === "Example"
                                          ? "text-info"
                                          : ""
                                      }
                                    >
                                      {dataSectionAttribute.value}
                                    </p>
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
