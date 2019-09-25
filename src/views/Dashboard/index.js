import React from 'react';
import SideNav from '../../components/SideNav';
import MobileTopBar from '../../components/MobileTopBar';
import RightBar from '../../components/RightBar';
import MainContent from '../../components/MainContent';

const Dashboard = ({ children }) => (
  <>
    <MobileTopBar />
    <SideNav />
    <MainContent>{children}</MainContent>
    <RightBar />
  </>
);

export default Dashboard;
