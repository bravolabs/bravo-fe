import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 200px;
  height: 160px;
  padding-left: 25px;
  border-left: 3px solid #6a6a6a;
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
  border-left: 3px solid #6a6a6a;
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
  color: #6a6a6a;
`;
