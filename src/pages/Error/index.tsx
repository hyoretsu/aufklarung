import React from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';

import { Container } from './styles';

const Error: React.FC = () => {
 return (
  <Container>
   <IoMdCloseCircleOutline />
   <span>Error 404</span>
   <span>Not Found</span>
  </Container>
 );
};

export default Error;
