import styled from 'styled-components';
import { Card } from '../../styling/atoms/Card';
import { BaseButton } from '../../styling/atoms/Buttons';
import colors from '../../styling/variables/UIColors';
import { BodyText } from '../../styling/atoms/Fonts';

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.img`
  width: 56px;
  height: 56px;
`;

export const Title = styled.span`
  margin: 10px 0;
  width: 165px;
  height: 20px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
`;

export const CardText = styled.span`
  width: 214px;
  height: 46px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #6a6a6a;
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-left: ${props => `8px solid ${props.borderColor}`};
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

export const CommentCardContainer = styled(Card)`
  position: relative;
  max-width: 720px;
  width: 80%;
  min-height: 125px;
  padding: 24px;
  margin-bottom: 1.6rem;
  border: 1px solid #f1f2f6;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px #f2f3f7;
  background-color: white;
  border-radius: 8px;
`;

export const CommentHeader = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
`;

export const CommentTime = styled.div`
  margin: auto;
  margin-right: 0;
  width: 80px;
  height: 2rem;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: rgba(0, 0, 0, 0.652);
`;

export const CommentText = styled(BodyText)`
  margin-top: 1.5rem;
  width: 100%;
  line-height: 2.2rem;
`;
