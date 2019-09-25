import styled from 'styled-components';
import { PageTitle } from '../../styling/atoms/Fonts';

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
`;

export const Title = styled(PageTitle)`
  font-size: 3.2rem;
  font-weight: 300;
  line-height: 3.8rem;
  color: #36464f;
  margin-bottom: 4rem;
`;

export const TeamHead = styled.div`
  display: flex;
  position: relative;
  max-width: 900px;
  width: 100%;
  padding: 0;
  padding-right: 9rem;
  padding-left: 6rem;
  margin-bottom: 1.6rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
`;

export const HeadText = styled.span`
  color: #7d8597;
  padding: 0;
  margin: auto;
  ${props => (props.marginLeft ? 'margin-left: 0' : 'margin-right: 0')};
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  max-width: 900px;
  width: 100%;
`;
