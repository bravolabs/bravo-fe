import styled from 'styled-components';
import { PageTitle, BodyText } from '../../styling/atoms/Fonts';

export const Container = styled.div`
  margin: auto;
  max-width: 850px;

  @media (max-width: 980px) {
    padding: 0 10px;
  }
`;

export const Main = styled.div`
  width: 100%;
  margin: 150px auto;
  justify-content: space-between;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 255px;
  margin-bottom: 50px;
`;

export const Caption = styled.span`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 48px;
  line-height: 22px;
`;

export const IntroText = styled.span`
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  font-weight: 300;
  color: #414a53;
`;

export const StyledPageTitle = styled(PageTitle)`
  margin: 0 auto;
  text-align: center;
`;

export const StyledExtraInfo = styled(BodyText)`
  width: 400px;
  text-align: center;
  margin: 15px auto 40px auto;
  line-height: 1.5;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
