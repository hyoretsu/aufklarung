import React from 'react';

import Header from '../../components/Header';
import Article from '../../components/Article';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

import { Content } from './styles';

const Homepage: React.FC = () => {
 return (
  <>
   <Header />
   <Content>
    <Article />
    <Sidebar />
   </Content>
   <Footer />
  </>
 );
};

export default Homepage;
