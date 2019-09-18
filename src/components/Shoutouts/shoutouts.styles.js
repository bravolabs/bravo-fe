import styled from 'styled-components';
import { PageTitle } from '../../styling/atoms/Fonts';

export const ShoutoutsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: 2.5rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
`;

export const Title = styled(PageTitle)`
  font-size: 3.2rem;
  font-weight: 300;
  line-height: 4.8rem;
  color: #36464f;
  margin-bottom: 2rem;
`;

export const SubTitle = styled(PageTitle)`
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: #36464f;
  margin-bottom: 2rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  max-width: 900px;
  width: 100%;
`;
