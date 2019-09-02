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

export const SlackLogo = styled.img`
  margin: 4px;
`;

export const LogoContainer = styled.div`
  margin: auto 2px auto 5px;
  width: 32px;
  height: 32px;
  background: #ffffff;
  border-radius: 4px;
`;

export const ButtonText = styled.div`
  text-decoration: none;
  margin: auto 5px;
  font-size: 1.5rem;
  span {
    font-weight: bold;
    font-size: 1.5rem;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Arrow = styled.img`
  margin: auto;
`;

export const StyledBaseButton = styled(BaseButton)`
  display: flex;
  width: 200px;
  height: 48px;
  font-size: 18px;
  background: #4265ed;
  color: white;
`;
