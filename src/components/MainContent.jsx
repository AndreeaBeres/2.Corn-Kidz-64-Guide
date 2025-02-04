import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

const MainContent = () => (
  <main className="main-content">
    <Sidebar />
    <Content />
  </main>
);

export default MainContent;