import React from 'react';

import DefaultTemplate from '../../components/DefaultTemplate';
import LocationInfo from '../../components/LocationInfo';

import FichaCatalografica from '../../assets/ficha.svg';
import FichaPng from '../../assets/ficha.png';

import { Styling } from './styles';

const Ficha: React.FC = () => {
 return (
  <DefaultTemplate>
   <LocationInfo />
   <Styling>
    <img src={FichaCatalografica} alt="Ficha Catalográfica" />
    <a href={FichaPng} download>
     Deseja baixar uma cópia?
    </a>
   </Styling>
  </DefaultTemplate>
 );
};

export default Ficha;
