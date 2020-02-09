import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitForDomChange } from '@testing-library/react';

import Portfolio from './Portfolio';

it('Should render', async () => {
    const { container } = render(<Portfolio projectName="enterpriseMarketplace" />);

    expect(container.querySelector('h1')).toBeTruthy();
});

it('Should open card on header click', async () => {
    render(<Portfolio projectName="enterpriseMarketplace" />);

    const collapse = screen.getByTestId('collapse-Data');

    expect(collapse).toHaveClass('show');

    fireEvent.click(screen.getByTestId('header-Data'));
    await waitForDomChange();

    expect(collapse).not.toHaveClass('show');
});
