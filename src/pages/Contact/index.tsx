import React from 'react';

import DefaultTemplate from '../../components/DefaultTemplate';
import LocationInfo from '../../components/LocationInfo';

import { Styling, Section, Contacts } from './styles';

const Contact: React.FC = () => {
 return (
  <DefaultTemplate>
   <LocationInfo />
   <Styling>
    <Section>
     <strong>Revista Aufklärung</strong>
     <p>Universidade Federal da Paraíba - UFPB</p>
     <p>Centro de Ciências Humanas e Letras</p>
     <p>Programa de Pós-Graduação em Filosofia</p>
     <p>Cidade Universitária - Campus I, Bairro Castelo Branco, João Pessoa - PB</p>
    </Section>
    <Contacts>
     <Section>
      <h4>Contato Principal</h4>
      <div>
       <p>Betto Leite da Silva</p>
       <p>Editor responsável</p>
       <p>Universidade Federal da Paraíba</p>
      </div>
      <span>Telefone</span>
      <div>
       <p>+55 (83) 9.3216-7205</p>
      </div>
      <a href="mailto:revistaaufklarung@hotmail.com">revistaaufklarung@hotmail.com</a>
     </Section>
     <Section>
      <h4>Contato para Suporte Técnico</h4>
      <div>
       <p>Aran Leite de Gusmão</p>
      </div>
      <a href="mailto:hyoretsu@gmail.com">hyoretsu@gmail.com</a>
     </Section>
    </Contacts>
   </Styling>
  </DefaultTemplate>
 );
};

export default Contact;
