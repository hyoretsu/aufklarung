import React from 'react';

import Header from '../../components/Header';
import Content from '../../components/Content';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const Homepage: React.FC = () => {
 return (
  <>
   <Header />
   <Content />
   <Sidebar />
   <Footer />
  </>
 );
};

export default Homepage;
