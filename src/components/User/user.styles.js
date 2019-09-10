import styled from 'styled-components';
import { ComponentTitle } from '../../styling/atoms/Fonts';

export const UserContainer = styled.div`
  display: flex;
  margin: ${props => (props.size === 'user-profile' ? '10px auto auto 0' : 'none')};
`;

export const ShoutoutUserAvatar = styled.img`
  margin: ${props => (props.size === 'user-profile' ? 'auto 20px auto 0' : 'auto 12px auto 0')};
  width: ${props => (props.size === 'user-profile' ? '140px' : '32px')};
  height: ${props => (props.size === 'user-profile' ? '140px' : '32px')};
  border-radius: 50%;
`;

export const Username = styled(ComponentTitle)`
  margin: auto 0;
  vertical-align: center;
  width: fit-content;
  height: ${props => (props.size === 'user-profile' ? '3.5rem' : '2rem')};
  line-height: ${props => (props.size === 'user-profile' ? '3.2rem' : '1.9rem')};
  font-size: ${props => props.size === 'user-profile' && '32px'};
`;
