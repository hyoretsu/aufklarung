import React from 'react';

import Root from '../../components/Root';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const Homepage: React.FC = () => {
 return (
  <Root>
   <Header />
   <Content />
   <Sidebar />
   <Footer />
  </Root>
 );
};

export default Homepage;
