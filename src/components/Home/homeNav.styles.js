import styled from 'styled-components';
import colors from '../../styling/variables/UIColors';

export const HomeNavContainer = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
  background-color: ${colors.light};

  @media (max-width: 850px) {
    padding: 15px;
  }
`;

export const NavContainer = styled.nav`
  width: 980px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  width: 48px;
  height: 48px;
`;

export const NavText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  margin-left: 8px;

  @media (max-width: 380px) {
    display: none;
  }
`;
