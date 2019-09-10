import styled from 'styled-components';
import colors from '../../styling/variables/UIColors';

export const SideNavContainer = styled.div`
  background-color: ${colors.brand};
  position: fixed;
  top: 0;
  left: 0;
  width: 90px;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
