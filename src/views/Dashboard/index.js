import React from 'react';
import SideNav from '../../components/SideNav';
import MainContent from '../../components/MainContent';

const Dashboard = ({ children }) => (
  <>
    <SideNav />
    <MainContent>{children}</MainContent>
  </>
);

export default Dashboard;
