import styled from 'styled-components';
import { BaseButton } from '../../styling/atoms/Buttons';

export const ButtonLink = styled.a`
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const StyledBaseButton = styled(BaseButton)`
  display: flex;
  width: 200px;
  height: 48px;
  background: #4265ed;
  color: white;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 35px;
  height: 35px;
  margin: 0 6px 0 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;

  span {
    font-weight: 900;
  }
`;
