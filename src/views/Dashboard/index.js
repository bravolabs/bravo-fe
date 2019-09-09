import React from 'react';
import styled from 'styled-components';

import SideNav from '../../components/SideNav';

const ContentContainer = styled.section`
  margin-left: 120px;
  flex-grow: 1;
`;

const PageContainer = styled.section`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`;

const Dashboard = ({ children }) => (
  <>
    <SideNav />
    {children}
  </>
);

export default Dashboard;
