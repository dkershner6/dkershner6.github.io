import React from 'react';

import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';

import Home, { HOME_PAGE_DATA } from '.';

jest.mock('./Projects/useGitHubProjects.ts', () => () => []);

describe('Home', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Home
                codingStats={{
                    userName: 'test',
                    githubContributions: {},
                    updatedAt: null
                }}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);

        expect(true).toBeTruthy();
    });

    it('has correct heading and suheading', async () => {
        render(
            <Home
                codingStats={{
                    userName: 'test',
                    githubContributions: {},
                    updatedAt: null
                }}
            />
        );

        expect(screen.getByTestId('heading')).toHaveTextContent(
            HOME_PAGE_DATA.heading
        );
        expect(screen.queryByText('Evil Genius')).toBeNull();

        expect(screen.getByTestId('subheading')).toHaveTextContent(
            HOME_PAGE_DATA.subheading
        );
    });
});
