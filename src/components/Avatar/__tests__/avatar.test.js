import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Avatar from '../index';

const attr = {
  src: 'image.png',
  alt: 'test image',
};

afterEach(rtl.cleanup);
describe('Cards Component', () => {
  it('Should Render Avatar component with src and alt', () => {
    const { getByRole } = rtl.render(<Avatar src={attr.src} alt={attr.alt} />);
    const item = getByRole('img');
    expect(item).toHaveAttribute('src', attr.src);
    expect(item).toHaveAttribute('alt', attr.alt);
  });
});
