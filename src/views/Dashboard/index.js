import React from 'react';
import SideNav from '../../components/SideNav';

const Dashboard = ({ children }) => (
  <>
    <SideNav />
    {children}
  </>
);

export default Dashboard;
