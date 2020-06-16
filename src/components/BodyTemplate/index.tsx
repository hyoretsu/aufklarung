import React from 'react';

import { Container } from './styles';

const BodyTemplate: React.FC = ({ children }) => {
 return <Container>{children}</Container>;
};

export default BodyTemplate;
