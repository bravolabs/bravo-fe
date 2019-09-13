import styled from 'styled-components';
import UIColors from '../../styling/variables/UIColors';

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  border: none;
  background: none;
  padding: 0;
  width: 2.4rem;
  height: 1.6rem;
`;

export const Slice = styled.div`
  height: 0.2rem;
  background-color: ${UIColors.light};
`;
