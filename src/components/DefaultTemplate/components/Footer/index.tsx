import React from 'react';

import Icons from './components/FooterIcons';
import { Container } from './styles';

const Footer: React.FC = () => {
 return (
  <Container>
   <strong>Registros e Indexações desta Revista:</strong>
   <div>
    {Icons.map(site => (
     <a key={site.id} href={site.url} title={site.title} target="_blank" rel="noopener noreferrer">
      <img src={site.img} alt={site.name} />
     </a>
    ))}
   </div>
   <p>
    ©2014 Aufklärung<sup>®</sup>, doi:10.18012/ARF, e-ISSN 2318-9428, p-ISSN 2358-8470 |{' '}
    <a href="mailto:revistaaufklarung@hotmail.com">revistaaufklarung@hotmail.com</a> | João Pessoa - PB, Brasil |{' '}
    <a href="https://creativecommons.org/licenses/by/4.0/">CC BY Attribution 4.0 International</a>
   </p>
  </Container>
 );
};

export default Footer;
