import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Fonts from './assets/fonts';
import Routes from './routes';

const App: React.FC = () => (
 <>
  <BrowserRouter>
   <Routes />
  </BrowserRouter>
  <GlobalStyle />
  <Fonts />
 </>
);

export default App;
