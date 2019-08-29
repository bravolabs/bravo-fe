import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BaseButton, FillButton, OutlineButton } from '../Buttons';

afterEach(cleanup);
describe('Buttons', () => {
  describe('Base Button', () => {
    it('should Have base style', () => {
      const { getByRole } = render(<BaseButton />);
      const item = getByRole('button');
      expect(item).toHaveStyle(`
    border: none;
    text-decoration: none;
    background: none;
    font-size: 1.6rem;
    color: black;
    font-weight: 300;
    padding: 1em 1.25em;
    border-radius: 4px;
    `);
    });

    it('should show disabled', () => {
      const { getByRole } = render(<BaseButton disabled />);
      const item = getByRole('button');
      expect(item).toBeDisabled();
      expect(item).toHaveStyle('color: #B0B7C3');
    });

    it('should have shadow', () => {
      const { getByRole } = render(<BaseButton shadow="0px 2px 2px rgba(0,0,0,0.1)" />);
      const item = getByRole('button');
      expect(item).toHaveStyle('box-shadow: 0px 2px 2px rgba(0,0,0,0.1)');
    });
  });

  describe('Fill Button', () => {
    it('should Have base style', () => {
      const { getByRole } = render(<FillButton />);
      const item = getByRole('button');
      expect(item).toHaveStyle('background: white');
    });

    it('should show disabled', () => {
      const { getByRole } = render(<FillButton disabled />);
      const item = getByRole('button');
      expect(item).toBeDisabled();
      expect(item).toHaveStyle('background: #EBECF0');
    });
  });

  describe('Outline Button', () => {
    it('should Have base style', () => {
      const { getByRole } = render(<OutlineButton />);
      const item = getByRole('button');
      expect(item).toHaveStyle(`
        border-width: 1px;
        border-color: black;
        border-style: solid;`);
    });

    it('should show disabled', () => {
      const { getByRole } = render(<OutlineButton disabled />);
      const item = getByRole('button');
      expect(item).toBeDisabled();
      expect(item).toHaveStyle('border-color: #EBECF0');
      expect(item).toHaveStyle('border-width: 1px');
    });
  });
});
