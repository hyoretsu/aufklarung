import React from 'react';

import { Container, SubmissionButton } from './styles';

const Sidebar: React.FC = () => {
 return (
  <Container>
   <strong>Navegar</strong>
   <SubmissionButton>Enviar submissão</SubmissionButton>
  </Container>
 );
};

export default Sidebar;
