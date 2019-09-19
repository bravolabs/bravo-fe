import styled from 'styled-components';
import { ComponentTitle } from '../../styling/atoms/Fonts';
import Avatar from '../Avatars';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ShoutoutUserAvatar = styled(Avatar)`
  margin: ${props => (props.size === 'user-profile' ? 'auto 20px auto 0' : 'auto 12px auto 0')};
  width: ${props => (props.size === 'user-profile' ? '100px' : '32px')};
  height: ${props => (props.size === 'user-profile' ? '100px' : '32px')};
  border-radius: 50%;
`;

export const Username = styled(ComponentTitle)`
  font-size: ${props => props.size === 'user-profile' && '2.8rem'};
  font-weight: 300;
`;
