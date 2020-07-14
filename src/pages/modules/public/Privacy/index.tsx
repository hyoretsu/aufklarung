import React from 'react';

import DefaultTemplate from 'components/DefaultTemplate';
import LocationInfo from 'components/LocationInfo';

import { Styling } from './styles';

const Privacy: React.FC = () => {
 return (
  <DefaultTemplate>
   <LocationInfo />
   <Styling>
    <p>
     Todos os dados, além de nomes e endereços informados nesta revista serão usados exclusivamente para os serviços por
     ela prestados, ficando indisponíveis para qualquer fim por terceiros.
    </p>
   </Styling>
  </DefaultTemplate>
 );
};

export default Privacy;
