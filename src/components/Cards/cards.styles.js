import styled from 'styled-components';
import { Card } from '../../styling/atoms/Card';
import { BaseButton } from '../../styling/atoms/Buttons';
import colors from '../../styling/variables/UIColors';

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 850px) {
    margin: 10px 0;
  }
`;

export const Icon = styled.img`
  width: 56px;
  height: 56px;
`;

export const Title = styled.span`
  margin: 10px 0;
  height: 20px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
`;

export const CardText = styled.span`
  height: 46px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #6a6a6a;
`;

export const StyledCard = styled(Card)`
  background-color: white;
  padding: 10px;
  width: 246px;
  height: 182px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-left: ${props => `8px solid ${props.borderColor}`};

  @media (max-width: 850px) {
    margin: 10px 0;
    width: 350px;
  }
`;

export const DisplayCardContainer = styled(Card)`
  margin: 0;
  margin-top: 182px;
  max-width: 800px;
  width: 80%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 8px solid ${colors.brand};

  section {
    margin: 15px 0;
  }
`;

export const MemberCardContainer = styled(Card)`
  display: flex;
  position: relative;
  justify-items: center;
  max-width: 900px;
  height: 6.4rem;
  padding: 0;
  padding-right: 8rem;
  padding-left: 2.4rem;
  margin-bottom: 1.2rem;
  border: 1px solid #f1f2f6;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px #f2f3f7;
  border-radius: 8px;
`;

export const Position = styled.div`
  margin: 12px 23px 0 1px;
  width: 40px;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 1.87781px 6.25935px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  p {
    text-align: center;
    margin-top: 12px;
    font-weight: 500;
  }
`;

export const MemberCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const MemberCardAction = styled(BaseButton)`
  color: #7d8597;
  outline: none;
  padding: 0;
  margin: auto;
  margin-right: 0;
  font-size: 1.6rem;
  font-weight: bolder;
  &:hover {
    color: #4265ed;
  }
  &:focus {
    color: #4265ed;
  }
  a {
    color: inherit;
    text-decoration: none;
    &:link {
      color: inherit;
    }
    &:visited {
      color: inherit;
    }
  }
`;

export const MemberCardValue = styled.p`
  color: #000;
  outline: none;
  padding: 0;
  margin: auto;
  margin-right: 0;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 19px;
`;

export const ViewProfile = styled(BaseButton)`
  display: none;
  position: absolute;
  right: -84px;
  top: 1.2rem;
  width: 160px;
  height: 4rem;
  background: #ffffff;
  border: 1px solid #f1f2f6;
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  text-align: left;
  padding: 0;
  padding: auto 12px;
  padding-left: 12px;
  color: #7d8597;
`;

export const CommentCardContainer = styled(Card)``;
