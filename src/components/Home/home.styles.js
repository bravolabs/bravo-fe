import styled from 'styled-components';
import { PageTitle, BodyText } from '../../styling/atoms/Fonts';

export const Container = styled.div`
  margin: auto;
  font-family: 'Lato', sans-serif;
  font-size: 62.5%;
  max-width: 1440px;
  max-height: 1000px;
`;

export const Main = styled.div`
  width: 900px;
  height: 450px;
  margin: 60px auto;
  justify-content: space-between;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
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
  color: #414a53;
`;

export const StyledPageTitle = styled(PageTitle)`
  margin: 0 auto;
`;

export const StyledExtraInfo = styled(BodyText)`
  text-align: center;
  margin: 20px auto 30px auto;
  width: 530px;
  height: 45px;
`;
