import styled from 'styled-components';
import { Card } from '../../styling/atoms/Card';
import colors from '../../styling/variables/UIColors';
import Breakpoints from '../../styling/variables/Breakpoints';

export const RightBarContainer = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 100vh;
  padding: 140px 30px 0px 30px;
  background: #f9fbfd;

  section {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${Breakpoints.medium}px) {
    display: none;
  }
`;

export const RightBarCard = styled(Card)`
  padding: 0px;
  width: 292px;
  min-height: 70px;
  height: 280px;
  margin-bottom: 50px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.06);
  border-radius: 0px 0px 10px 10px;

  header {
    background-color: #6884f1;
    border-radius: 8px 8px 0 0;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.06);

    img {
      border-radius: 8px 8px 0 0;
    }
  }
`;

export const TextContent = styled.div`
  height: 100px;
  padding: 10px;
  background: #ffffff;
  border-radius: 0px 0px 8px 8px;

  p {
    margin-top: 10px;
    line-height: 1.8;
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

  input {
    margin-right: 9px;
    background: transparent;
    border: 0;
  }

  &:hover {
    cursor: pointer;
    background-color: #6884f1;
    color: #ffffff;
    font-weight: bold;
  }
`;
