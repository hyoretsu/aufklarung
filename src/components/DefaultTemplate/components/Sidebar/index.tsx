import React from 'react';
import { Link } from 'react-router-dom';

import { Container, SubmissionButton } from './styles';

const Sidebar: React.FC = () => {
 return (
  <Container>
   <strong>Navegar</strong>
   <Link to="/submissions">
    <SubmissionButton>Enviar Submissão</SubmissionButton>
   </Link>
  </Container>
 );
};

export default Sidebar;
