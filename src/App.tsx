import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { wrapHistory } from 'oaf-react-router';

import GlobalStyle from './styles/global';
import Fonts from './assets/fonts';
import Routes from './routes';

const App: React.FC = () => {
 const history = createBrowserHistory();
 wrapHistory(history);

 return (
  <>
   <Router history={history}>
    <Routes />
   </Router>
   <GlobalStyle />
   <Fonts />
  </>
 );
};

export default App;
