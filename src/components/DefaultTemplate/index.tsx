import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
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
