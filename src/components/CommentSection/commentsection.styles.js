import styled from 'styled-components';
import { PageTitle } from '../../styling/atoms/Fonts';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  padding: 0;
  padding-left: 4rem;
  margin: 0;
`;

export const Title = styled(PageTitle)`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 3.8rem;
  color: #506174;
  margin-bottom: 1rem;
`;
