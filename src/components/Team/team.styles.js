import styled from 'styled-components';
import { PageTitle } from '../../styling/atoms/Fonts';

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: 6rem;
  margin-left: 20rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
`;

export const Title = styled(PageTitle)`
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 3.8rem;
  color: #000;
  margin-bottom: 4rem;
`;

export const TeamHead = styled.div`
  display: flex;
  position: relative;
  max-width: 1000px;
  width: 100%;
  padding: 0;
  padding-right: 7rem;
  padding-left: 6rem;
  margin-bottom: 1.6rem;
  border: 1px solid #f1f2f6;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
`;

export const HeadText = styled.span`
  color: #7d8597;
  padding: 0;
  margin: auto;
  &:first-of-type {
    margin-right: 0;
  }
  &:last-of-type {
    margin-left: 0;
  }
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;
`;
