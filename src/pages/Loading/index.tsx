import React from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

const Loading: React.FC = () => (
 <Container>
  <ReactLoading type="spinningBubbles" color="#000" height={120} width={120} />
  <span>Loading...</span>
 </Container>
);

export default Loading;
