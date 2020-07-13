import React from 'react';

import DefaultTemplate from '../../components/DefaultTemplate';
import LocationInfo from '../../components/LocationInfo';

import { ReactComponent as IndexCardSvg } from '../../assets/indexCard.svg';
import IndexCardPng from '../../assets/indexCard.png';

import { Styling } from './styles';

const IndexCard: React.FC = () => {
 return (
  <DefaultTemplate>
   <LocationInfo />
   <Styling>
    <IndexCardSvg />
    <a href={IndexCardPng} download>
     Deseja baixar uma cópia?
    </a>
   </Styling>
  </DefaultTemplate>
 );
};

export default IndexCard;
