import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import CodeChallenges from '../CodeChallenges';

it('Should render', async () => {
    const { container } = render(<CodeChallenges />);

    expect(container.querySelector('h3')).toBeTruthy();
});
