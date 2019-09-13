import React from 'react';
import { cleanup, render } from '@testing-library/react';

import DisplayCard from '../DisplayCard';

afterEach(cleanup);
describe('Display Card Component', () => {
  it('Should render header and text passed as props', () => {
    const { getAllByText } = render(
      <DisplayCard header="This is Test Header" text="This is the text body" />
    );
    getAllByText(/This is Test Header/);
    getAllByText(/This is the text body/);
  });
});
