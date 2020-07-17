import React from 'react';
import { Link } from 'react-router-dom';

import DefaultTemplate from 'components/DefaultTemplate';
import Details from 'components/Issue';
import LocationInfo from 'components/LocationInfo';

const Issue: React.FC = () => {
 return (
  <DefaultTemplate>
   <LocationInfo>
    <Link to={window.location.href}>v. 7 n. Especial (2020): Dossiê Sartre</Link>
   </LocationInfo>
   <Details />
  </DefaultTemplate>
 );
};

export default Issue;
