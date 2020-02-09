import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../common/Layout';

import data from '../../__mocks__/siteMetadata';

describe('Layout', () => {
    it('renders a simple page', () => {
        const { container } = render(
            <Layout siteMetadata={data.site.siteMetaData}>
                <h1>Title</h1>
            </Layout>
        );

        expect(container.querySelector('h1')).toBeTruthy();
    });
});
