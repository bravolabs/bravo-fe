import styled from 'styled-components';
import colors from '../../styling/variables/UIColors';

export const ProfileHeader = styled.div`
  display: flex;
  position: relative;
  max-width: 900px;
  width: 100%;
  height: 30vh;
  padding-left: 50px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const ShoutoutsButton = styled.div`
  position: absolute;
  text-align: center;
  align-items: center;
  bottom: 0px;
  width: 180px;
  height: 4rem;
  font-size: 24px;
  line-height: 29px;
  color: ${colors.brand};
  border-bottom: 4px solid ${colors.brand};
  &:last-of-type {
    left: 310px;
  }
  cursor: pointer;
`;

export const Emoji = styled.img`
  width: 20px;
  height: 20px;
  margin: auto 5px;
`;

export const ProfileBody = styled.div`
  margin-top: 40px;
  max-width: 900px;
  width: 100%;
  height: max-content;
`;
