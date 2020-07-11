import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Home, { HOME_PAGE_DATA } from '.';

describe('Home', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('has correct heading and suheading', async () => {
        render(<Home />);

        expect(screen.getByTestId('heading')).toHaveTextContent(
            HOME_PAGE_DATA.heading
        );
        expect(screen.queryByText('Greg Weber')).toBeNull();

        expect(screen.getByTestId('subheading')).toHaveTextContent(
            HOME_PAGE_DATA.subheading
        );
    });
});
