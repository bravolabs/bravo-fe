import React from 'react';
import styled from 'styled-components';

import SideNav from '../../components/SideNav';

const ContentContainer = styled.section`
  margin-left: 120px;
  flex-grow: 1;
`;
const Dashboard = ({ children }) => (
  <>
    <SideNav />
    {children}
  </>
);

export default Dashboard;
