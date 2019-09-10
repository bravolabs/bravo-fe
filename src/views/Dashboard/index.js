import React from 'react';
import SideNav from '../../components/SideNav';
import RightBar from '../../components/RightBar';
import MainContent from '../../components/MainContent';

const Dashboard = ({ children }) => (
  <>
    <SideNav />
    <MainContent>{children}</MainContent>
    <RightBar />
  </>
);

export default Dashboard;
