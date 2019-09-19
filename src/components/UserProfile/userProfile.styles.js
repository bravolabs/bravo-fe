import styled from 'styled-components';
import colors from '../../styling/variables/UIColors';
import Breakpoints from '../../styling/variables/Breakpoints';

export const ProfileHeader = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 1.87781px 6.25935px rgba(0, 0, 0, 0.06);
  margin-top: 32px;

  section {
    padding: 32px 0 0 40px;
    height: 100px;
  }

  nav {
    position: absolute;
    display: flex;
    bottom: 0px;
    width: 100%;
    justify-content: space-around;
  }
`;

export const ShoutoutsButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  font-size: 2.2rem;
  color: ${colors.brand};
  padding-bottom: 5px;
  border-bottom: ${props => (props.active ? `4px solid ${colors.brand}` : 'none')};
  cursor: pointer;

  @media (max-width: ${Breakpoints.small}px) {
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Emoji = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const ProfileBody = styled.div`
  margin-top: 20px;
  width: 100%;
  height: max-content;
`;
