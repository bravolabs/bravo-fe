import styled from 'styled-components';
import colors from '../../styling/variables/UIColors';

export const ProfileHeader = styled.div`
  position: relative;
  width: max-width;
  height: 30vh;
  margin-left: 80px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const ShoutoutsButton = styled.div`
  position: absolute;
  text-align: center;
  align-items: center;
  bottom: 0px;
  margin-left: 160px;
  width: 180px;
  height: 4rem;
  font-size: 24px;
  line-height: 29px;
  color: ${colors.brand};
  border-bottom: 4px solid ${colors.brand};
`;

export const ProfileBody = styled.div`
  margin-top: 40px;
  width: max-width;
  height: max-content;
`;
