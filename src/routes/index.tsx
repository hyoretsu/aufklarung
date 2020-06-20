import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Info from '../pages/Info';
import Issue from '../pages/Issue';

const Routes: React.FC = () => (
 <Switch>
  <Route path="/" exact component={Homepage} />
  <Route path="/issues/current" component={() => <Redirect to="/issues/25" />} />
  <Route path="/info" component={Info} />

  <Route path="/issues/:id" exact component={Issue} />
 </Switch>
);

export default Routes;
