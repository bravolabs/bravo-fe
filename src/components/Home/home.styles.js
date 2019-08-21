import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  font-family: "Lato", sans-serif;
  font-size: 62.5%;
  max-width: 1440px;
  max-height: 1000px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 0.5px solid #C4C4C4;
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  
`;

export const NavText = styled.span`
  font-weight: 600;
  margin-left: 8px;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
`;

export const Main = styled.div`
  width: 900px;
  height: 405px;
  margin: 140px auto;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 160px;
  margin-bottom: 100px;
`;

export const Caption = styled.span`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 48px;
  line-height: 22px;
`;

export const IntroText = styled.span`
  text-align: center;
  width: 530px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 300;
  color: #414A53;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 200px;
  height: 160px;
  padding-left: 25px;
  border-left: 3px solid #6A6A6A;
`;

export const Icon = styled.img`
  width: 56px;
  height: 56px;
`;

export const Title = styled.span`
  font-weight: bold;
  margin: 5px;
  font-size: 20px;
  line-height: 24px;
`;

export const CardText = styled.span`
  font-weight: 500;
  width: fit-content;
  font-size: 18px;
  line-height: 24px;
  color: #6A6A6A;
`;

export const Footer = styled.div`
  
`;
