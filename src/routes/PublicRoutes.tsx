import React, { lazy } from 'react';
import { Route, Redirect } from 'react-router-dom';

const Homepage = lazy(() => import('../pages/modules/public/Homepage'));
const NewsArchive = lazy(() => import('../pages/modules/public/NewsArchive'));
const News = lazy(() => import('../pages/modules/public/News'));
const Info = lazy(() => import('../pages/modules/public/Info'));
const About = lazy(() => import('../pages/modules/public/About'));
const EditorialTeam = lazy(() => import('../pages/modules/public/EditorialTeam'));
const Ficha = lazy(() => import('../pages/modules/public/Ficha'));
const Contact = lazy(() => import('../pages/modules/public/Contact'));
const Submissions = lazy(() => import('../pages/modules/public/Submissions'));
const Privacy = lazy(() => import('../pages/modules/public/Privacy'));
const Archives = lazy(() => import('../pages/modules/public/Archives'));
const Issue = lazy(() => import('../pages/modules/public/Issue'));
const Login = lazy(() => import('../pages/modules/public/Login'));

const PublicRoutes: React.FC = () => (
 <>
  <Route path="/" exact component={Homepage} />
  <Route path="/current" component={() => <Redirect to="/issues/19" />} />
  <Route path="/news" exact component={NewsArchive} />
  <Route path="/news/:id" component={News} />
  <Route path="/info" component={Info} />

  <Route path="/about" component={About} />
  <Route path="/editorial_team" component={EditorialTeam} />
  <Route path="/ficha" component={Ficha} />
  <Route path="/contact" component={Contact} />
  <Route path="/submissions" component={Submissions} />
  <Route path="/privacy" component={Privacy} />

  <Route path="/issues" exact component={Archives} />
  <Route path="/issues/:id" exact component={Issue} />

  <Route path="/login" exact component={Login} />
 </>
);

export default PublicRoutes;
