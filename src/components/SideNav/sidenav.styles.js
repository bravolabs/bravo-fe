import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from '../../styling/variables/UIColors';

export const SideNavContainer = styled.div`
  background-color: ${colors.brand};
  border-radius: 0 8px 8px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 90px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  z-index: 999;
  button {
    background: none;
    padding: 0;
  }
`;

export const NavItemsContainer = styled.nav`
  display: flex;
  flex-direction: column;
  height: 70%;
  width: 100%;
`;

export const NavIcon = styled(NavLink)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  text-decoration: none;

  div {
    display: none;
    position: absolute;
    align-self: flex-start;
    width: 0;
    height: 100%;
    background-color: white;
    border-radius: 0 10px 10px 0;
  }

  &.active,
  &:hover,
  &:focus {
    outline: 0;
    div {
      display: flex;
      width: 6px;
      animation: open 0.3s;
      -webkit-animation: open 0.4s;
    }
  }

  @keyframes open {
    from {
      width: 0px;
    }
    to {
      width: 6px;
    }
  }

  i {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background-color: white;
    padding: 8px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);

    img {
      width: 100%;
    }
  }

  span {
    margin-top: 8px;
    font-size: 1.4rem;
    color: white;
  }
`;

export const AvatarContainer = styled.div`
  width: 48px;
  height: 48px;

  img {
    border-radius: 50%;
    width: 100%;
  }
`;
