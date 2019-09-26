import React from 'react';
import SideNav from '../../components/SideNav';
import MobileTopBar from '../../components/MobileTopBar';
import RightBar from '../../components/RightBar';
import { MainContent } from './dashboard.styles';

const Dashboard = ({ children }) => (
  <>
    <MobileTopBar />
    <SideNav />
    <MainContent>
      <section>{children}</section>
      <RightBar />
    </MainContent>
  </>
);

export default Dashboard;
