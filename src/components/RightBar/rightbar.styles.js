import styled from 'styled-components';
import { Card } from '../../styling/atoms/Card';

export const RightBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 100vh;

  section {
    display: flex;
    flex-direction: column;

    .learn {
      color: #000000;
      font-weight: 300;
      margin-bottom: 20px;
      padding-left: 3px;
    }
  }

  @media (max-width: 995px) {
    display: none;
  }
`;

export const RightBarCard = styled(Card)`
  padding: 0px;
  width: 292px;
  min-height: 70px;
  height: 260px;
  margin-bottom: 80px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.06);
  border-radius: 8px 8px 10px 10px;
  background: #ffffff;

  header {
    position: relative;
    border-radius: 8px 8px 0 0;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.06);
    text-align: center;
    color: white;
    img {
      border-radius: 8px 8px 0 0;
      width: 100%;
    }

    p {
      color: white;
      position: absolute;
      height: 22px;
      left: 70px;
      top: 66%;
      font-weight: 600;
      font-size: 20px;
      line-height: 22px;
    }
  }
`;

export const TextContent = styled.div`
  height: 130px;
  padding: 10px;
  background: #ffffff;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.06);

  p {
    margin-top: 5px;
    line-height: 1.8;
    margin-bottom: 5px;

    span {
      color: red;
      font-size: 15px;
      font-weight: 300;
      background: #f9fbfd;
    }
  }
`;

export const MediumCard = styled(Card)`
  width: 292px;
  height: 50px;
  display: flex;
  padding: 10px;
  align-items: center;
  margin: 10px 0;
  transition: 0.3s ease-in-out;
  background: #ffffff;
  border-radius: 9.631px;
  box-shadow: 0px 2.8893px 9.631px rgba(0, 0, 0, 0.06);

  p {
    margin-left: 10px;
  }

  .check {
    font-size: 20px;
    font-weight: 50;
    stroke-width: 1.3;
    color: #9e9696;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 3.75561px 12.5187px rgba(0, 0, 0, 0.12);

    .check {
      stroke-width: 2;
    }
  }
`;
