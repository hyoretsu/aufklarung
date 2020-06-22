import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Loading from '../pages/Loading';
import Error from '../pages/Error';

const Homepage = lazy(() => import('../pages/Homepage'));
const NewsArchive = lazy(() => import('../pages/NewsArchive'));
const News = lazy(() => import('../pages/News'));
const Info = lazy(() => import('../pages/Info'));
const Contact = lazy(() => import('../pages/Contact'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Archives = lazy(() => import('../pages/Archives'));
const Issue = lazy(() => import('../pages/Issue'));

const Routes: React.FC = () => (
 <Suspense fallback={<Loading />}>
  <Switch>
   <Route path="/" exact component={Homepage} />
   <Route path="/issues/current" component={() => <Redirect to="/issues/19" />} />
   <Route path="/news" exact component={NewsArchive} />
   <Route path="/news/:id" component={News} />
   <Route path="/info" component={Info} />

   <Route path="/contact" component={Contact} />
   <Route path="/privacy" component={Privacy} />

   <Route path="/issues" exact component={Archives} />
   <Route path="/issues/:id" exact component={Issue} />

   <Route component={Error} />
  </Switch>
 </Suspense>
);

export default Routes;
