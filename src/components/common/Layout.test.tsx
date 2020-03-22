import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Layout from '../common/Layout';

import GlobalContext from './GlobalContext';

const globalContext = { siteMetadata: { siteUrl: 'https://dkershner.com', title: 'TestTitle', description: 'TestDescription' } };

describe('Layout', () => {
    it('renders a simple page', () => {
        const { container } = render(
            <GlobalContext.Provider value={globalContext}>
                <Layout>
                    <h1>Title</h1>
                </Layout>
            </GlobalContext.Provider>
        );

        const h1 = container.querySelector('h1');
        expect(h1).toBeTruthy();

        const title = screen.getByTestId('pageTitleTest');
        expect(title).toHaveTextContent('Page Title: TestTitle');
    });
});
