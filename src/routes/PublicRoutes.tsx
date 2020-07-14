import React, { lazy } from 'react';
import { Route, Redirect } from 'react-router-dom';

const Homepage = lazy(() => import('../pages/modules/public/Homepage'));
const NewsArchive = lazy(() => import('../pages/modules/public/NewsArchive'));
const News = lazy(() => import('../pages/modules/public/News'));
const Info = lazy(() => import('../pages/modules/public/Info'));
const About = lazy(() => import('../pages/modules/public/About'));
const EditorialTeam = lazy(() => import('../pages/modules/public/EditorialTeam'));
const IndexCard = lazy(() => import('../pages/IndexCard'));
const Contact = lazy(() => import('../pages/modules/public/Contact'));
const Submissions = lazy(() => import('../pages/modules/public/Submissions'));
const Privacy = lazy(() => import('../pages/modules/public/Privacy'));
const Archives = lazy(() => import('../pages/modules/public/Archives'));
const Issue = lazy(() => import('../pages/modules/public/Issue'));
const Login = lazy(() => import('../pages/modules/public/Login'));

const PublicRoutes: React.FC = () => (
 <>
  <Route path="/" exact component={Homepage} />
  <Route path="/issues/current" component={() => <Redirect to="/issues/19" />} />
  <Route path="/news" exact component={NewsArchive} />
  <Route path="/news/:id" component={News} />
  <Route path="/info" component={Info} />

  <Route path="/about" component={About} />
  <Route path="/editorial_team" component={EditorialTeam} />
   <Route path="/index_card" component={IndexCard} />
  <Route path="/contact" component={Contact} />
  <Route path="/submissions" component={Submissions} />
  <Route path="/privacy" component={Privacy} />

  <Route path="/issues" exact component={Archives} />
  <Route path="/issues/:id" exact component={Issue} />

  <Route path="/login" exact component={Login} />
 </>
);

export default PublicRoutes;
