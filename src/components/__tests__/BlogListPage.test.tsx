import React from 'react';
import { render, screen } from '@testing-library/react';

import { BlogListInnerPage } from '../BlogListPage';

const data = {
    allMarkdownRemark: {
        group: [
            {
                fieldValue: 'test',
                totalCount: 10,
            },
        ],
        nodes: [],
    },
};

it('Should render BlogListPage', () => {
    const { container } = render(<BlogListInnerPage data={data} />);

    expect(container.querySelector('h1')).toBeTruthy();
});
