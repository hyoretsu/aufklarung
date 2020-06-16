import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import { Content, Body } from './styles';

const DefaultTemplate: React.FC = ({ children }) => {
 return (
  <>
   <Header />
   <Content>
    <Body>{children}</Body>
    <Sidebar />
   </Content>
   <Footer />
  </>
 );
};

export default DefaultTemplate;
