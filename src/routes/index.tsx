import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Issue from '../pages/Issue';

const Routes: React.FC = () => (
 <Switch>
  <Route path="/" component={Homepage} exact />
  <Route path="/current" component={() => <Redirect to="/issues/25" />} />

  <Route path="/issues/:id" component={Issue} exact />
 </Switch>
);

export default Routes;
