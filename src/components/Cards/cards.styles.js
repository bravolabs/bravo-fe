import styled from 'styled-components';
import { Card } from '../../styling/atoms/Card';
import colors from '../../styling/variables/UIColors';

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TypographicSpacer = styled.div`
  width: 8px;
  height: 182px;
  margin: auto 0;
  background: ${props => (props.background ? props.background : '#6a6a6a')};
`;

// export const Cards = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-left: 10px;
// `;

// export const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   width: 200px;
//   height: 160px;
//   padding-left: 25px;
//   border-left: 3px solid #6a6a6a;
// `;

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
  margin: 0 auto;
  margin-top: 182px;
  width: 800px;
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
