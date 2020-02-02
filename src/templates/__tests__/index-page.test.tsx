import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import { IndexPageTemplate } from '../index-page';

const data = {
    markdownRemark: {
        frontmatter: {
            templateKey: 'index-page',
            title: 'Derek Kershner',
            image: '/img/hero-background.jpg',
            heading: 'Derek Kershner',
            subheading: 'Full-stack Software Engineer, DevOps Practitioner, & Cloud Architect',
        },
    },
};
const { frontmatter } = data.markdownRemark;

describe('Index', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <IndexPageTemplate image={frontmatter.image} title={frontmatter.title} heading={frontmatter.heading} subheading={frontmatter.subheading} />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('has correct heading and suheading', async () => {
        render(<IndexPageTemplate image={frontmatter.image} title={frontmatter.title} heading={frontmatter.heading} subheading={frontmatter.subheading} />);

        expect(screen.getByTestId('heading')).toHaveTextContent(frontmatter.heading);
        expect(screen.queryByText('Greg Weber')).toBeNull();

        expect(screen.getByTestId('subheading')).toHaveTextContent(frontmatter.subheading);
    });

    it('has other components', async () => {
        render(<IndexPageTemplate image={frontmatter.image} title={frontmatter.title} heading={frontmatter.heading} subheading={frontmatter.subheading} />);

        expect(screen.getByTestId('about')).toBeDefined();
        expect(screen.getByTestId('portfolio-menu')).toBeDefined();
    });
});
