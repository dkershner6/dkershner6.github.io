import React from 'react';
import { render } from '@testing-library/react';

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
    render(<BlogListInnerPage data={data} />);
});
