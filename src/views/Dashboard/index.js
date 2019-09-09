import React from 'react';
import styled from 'styled-components';

import SideNav from '../../components/SideNav';

const ContentContainer = styled.section`
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const PageContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Dashboard = ({ children }) => (
  <PageContainer>
    <SideNav />
    <ContentContainer>{children}</ContentContainer>
  </PageContainer>
);

export default Dashboard;
