import styled from 'styled-components';
import { Card } from '../../styling/atoms/Card';
import colors from '../../styling/variables/UIColors';

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

  @media (max-width: 700px) {
    display: none;
  }
`;

export const RightBarCard = styled(Card)`
  padding: 0px;
  width: 292px;
  min-height: 50px;
  margin-bottom: 50px;

  header {
    background-color: ${colors.brand};
    border-radius: 8px 8px 0 0;

    img {
      border-radius: 8px 8px 0 0;
    }
  }
`;

export const TextContent = styled.div`
  height: 100px;
  padding: 10px;

  p {
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

  input {
    margin-right: 9px;
    background: transparent;
    border: 0;
  }

  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;
