import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import DefaultTemplate from '../../components/DefaultTemplate';
import LocationInfo from '../../components/LocationInfo';
import Details from '../../components/Issue';

const Issue: React.FC = () => {
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

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
