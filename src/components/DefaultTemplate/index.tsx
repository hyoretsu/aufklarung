import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import { Container, Content, Body } from './styles';

const DefaultTemplate: React.FC = ({ children }) => {
 return (
  <Container>
   <Header />
   <Content>
    <Body>{children}</Body>
    <Sidebar />
   </Content>
   <Footer />
  </Container>
 );
};

export default DefaultTemplate;
