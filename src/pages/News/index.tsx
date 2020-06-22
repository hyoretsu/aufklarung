import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

import DefaultTemplate from '../../components/DefaultTemplate';
import { Styling } from './styles';

const News: React.FC = () => {
 return (
  <DefaultTemplate>
   <Styling>
    <h2>Journal Aufklärung is now supported by CAPES/CNPq</h2>
    <div>
     <FaCalendarAlt />
     <span>2018-11-05</span>
    </div>
    <p>
     &emsp;&emsp;A Revista Aufklärung tem o prazer de comunicar sua APROVAÇÃO no Edital "Chamada CNPq/CAPES No 26/2017 –
     Programa Editorial" [441153/2017-8], no qual concorreu com centenas de outros periódicos. Para a Revista, isto
     traduz todo nosso cumprimento de critérios internacionais de qualidade na publicação científica de conteúdos
     acadêmicos.
    </p>
    <p>
     &emsp;&emsp;Agradecemos poder estar fazendo parte deste grupo seleto de revistas que são apoiadas diretamente pela
     CAPES/CNPq, órgãos de apoio e financiamento à pesquisa e publicação no Brasil, e estendemos esse reconhecimento aos
     autores e avaliadores que nos prestigiaram de forma eficaz.
    </p>
    <p>
     {' '}
     &emsp;&emsp;A Revista Aufklärung sente-se orgulhosa e manifesta sua satisfação pelo apoio Editorial,
     comprometendo-se cada vez mais em seguir com seu compromisso público de qualidade editorial.
    </p>
   </Styling>
  </DefaultTemplate>
 );
};

export default News;
