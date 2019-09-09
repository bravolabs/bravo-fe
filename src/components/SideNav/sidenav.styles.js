import styled from 'styled-components';
import colors from '../../styling/variables/UIColors';

export const SideNavContainer = styled.div`
  background-color: ${colors.brand};
  width: 80px;
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
