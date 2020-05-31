import React, { ReactElement } from 'react';
import { Jumbotron } from 'react-bootstrap';

import PortfolioHeader from './PortfolioHeader';
import { projects } from '../../data/Projects';

const PortfolioMenu = (): ReactElement => {
    return (
        <>
            <Jumbotron
                id="portfolio"
                data-testid="portfolio-menu"
                fluid
                className="bg-primary text-white"
            >
                <h3 className="display-4 text-center">
                    <a className="text-light" href="/portfolio">
                        Portfolio
                    </a>
                </h3>
            </Jumbotron>

            {projects.map((project, index) => (
                <PortfolioHeader key={index} project={project} menu={true} />
            ))}
        </>
    );
};

export default PortfolioMenu;
