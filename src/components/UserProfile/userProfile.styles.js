import styled from 'styled-components';
import colors from '../../styling/variables/UIColors';
import Breakpoints from '../../styling/variables/Breakpoints';

export const ProfileHeader = styled.div`
  display: flex;
  position: relative;
  max-width: 900px;
  width: 100%;
  height: 30vh;
  padding-left: 50px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const ProfileNavigation = styled.nav`
  position: absolute;
  bottom: 0;
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  @media (max-width: ${Breakpoints.small}px) {
    position: fixed;
    bottom: 0;
    width: 100vw;
    left: 0%;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    &::-webkit-scrollbar {
      display: none;
    }

    > * {
      flex: 0 0 auto;
    }
  }
`;

export const ShoutoutsButton = styled.div`
  text-align: center;
  align-items: center;
  width: 180px;
  height: 4rem;
  font-size: 24px;
  line-height: 29px;
  margin-right: 120px;
  color: ${colors.brand};
  border-bottom: ${props => (props.active ? `4px solid ${colors.brand}` : 'none')};
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
