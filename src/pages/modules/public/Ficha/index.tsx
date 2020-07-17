import React from 'react';

import DefaultTemplate from 'components/DefaultTemplate';
import LocationInfo from 'components/LocationInfo';

import FichaPng from 'assets/ficha.png';
import { ReactComponent as FichaCatalografica } from 'assets/ficha.svg';

import { Styling } from './styles';

const Ficha: React.FC = () => {
 return (
  <DefaultTemplate>
   <LocationInfo />
   <Styling>
    <FichaCatalografica />
    <a href={FichaPng} download>
     Deseja baixar uma cópia?
    </a>
   </Styling>
  </DefaultTemplate>
 );
};

export default Ficha;
