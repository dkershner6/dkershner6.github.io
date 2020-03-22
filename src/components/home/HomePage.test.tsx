import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import { HomePageTemplate } from './HomePageTemplate';

const data = {
    title: 'Derek Kershner',
    image: '/img/hero-background.jpg',
    heading: 'Derek Kershner',
    subheading: 'Full-stack Software Engineer, DevOps Practitioner, & Cloud Architect'
};

describe('Home', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HomePageTemplate image={data.image} heading={data.heading} subheading={data.subheading} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('has correct heading and suheading', async () => {
        render(<HomePageTemplate image={data.image} heading={data.heading} subheading={data.subheading} />);

        expect(screen.getByTestId('heading')).toHaveTextContent(data.heading);
        expect(screen.queryByText('Greg Weber')).toBeNull();

        expect(screen.getByTestId('subheading')).toHaveTextContent(data.subheading);
    });

    it('has other components', async () => {
        render(<HomePageTemplate image={data.image} heading={data.heading} subheading={data.subheading} />);

        expect(screen.getByTestId('about')).toBeDefined();
        expect(screen.getByTestId('portfolio-menu')).toBeDefined();
    });
});
