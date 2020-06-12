import React from 'react';

import { Container } from './styles';

const Article: React.FC = ({ children }) => {
 return (
  <Container>
   {children}
   <strong>Edição Atual</strong>
  </Container>
 );
};

export default Article;
