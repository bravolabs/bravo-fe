import React from 'react';
import * as rtl from '@testing-library/react';

import Card from '../Card';
import clapIcon from '../../../../assets/clap-icon.png';

afterEach(rtl.cleanup);
describe('Cards Component', () => {
  it('Should render all cards on home', () => {
    const { getByText } = rtl.render(
      <Card
        icon={clapIcon}
        title="bravo slack bot"
        text="install our slack integration in few simple clicks"
      />
    );
    getByText(/bravo slack bot/i);
  });
});
