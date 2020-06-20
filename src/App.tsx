import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Fonts from './assets/fonts';
import Routes from './routes';
import ScrollToTop from './utils/ScrollToTop';

const App: React.FC = () => (
 <>
  <BrowserRouter>
   <ScrollToTop />
   <Routes />
  </BrowserRouter>
  <GlobalStyle />
  <Fonts />
 </>
);

export default App;
