import styled from 'styled-components';
import UIColors from '../../styling/variables/UIColors';

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: none;
  width: 2.4rem;
  height: 1.6rem;
`;

export const Slice = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: ${UIColors.light};
`;
