import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import NavItem from '../NavItem';
import { renderWithRedux } from '../../../utils/testHelpers';
import NavItems from '../NavItems';

const attr = {
  icon: 'image.png',
  link: '/test-link',
  label: 'test label',
  fn: () => 'clicked',
};

afterEach(cleanup);
describe('Nav Item Component', () => {
  it('Should Render Nav item with all props correctly', () => {
    const { container, getByRole } = renderWithRedux(
      <NavItem link={attr.link} icon={attr.icon} label={attr.label} />
    );
    const parent = container.firstChild;
    const icon = getByRole('img');
    expect(parent).toHaveAttribute('href', attr.link);
    expect(icon).toHaveAttribute('src', attr.icon);
    expect(icon).toHaveAttribute('alt', attr.link);
  });

  it('Should Render Nav item and default link if empty', () => {
    const { container } = renderWithRedux(<NavItem />);
    const item = container.firstChild;
    expect(item).toHaveAttribute('href', '/');
  });

  it('Active indicatior to be hidden on Inital', () => {
    const { container } = renderWithRedux(<NavItem />);
    const item = container.firstChild.firstChild;
    expect(item).not.toBeVisible();
  });

  it('Active indicatior to be visible hover over icon', () => {
    const { container } = renderWithRedux(<NavItem />);
    const item = fireEvent.mouseOver(container.firstChild);
    expect(item).toBe(true);
  });
});
