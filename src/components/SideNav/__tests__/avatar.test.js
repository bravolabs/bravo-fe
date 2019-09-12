import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Avatar from '../Avatar';

const attr = {
  src: 'image.png',
  alt: 'test image',
};

afterEach(cleanup);
describe('Avatar Component', () => {
  it('Should Render Avatar component with src and alt', () => {
    const { getByRole } = render(<Avatar src={attr.src} alt={attr.alt} />);
    const item = getByRole('img');
    expect(item).toHaveAttribute('src', attr.src);
    expect(item).toHaveAttribute('alt', attr.alt);
  });
});
