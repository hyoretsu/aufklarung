import styled from 'styled-components';
import { transparentize } from 'polished';

export const Section = styled.section`
 display: flex;
 padding: 2vh 2vw;
 border-top: 1px solid #ddd;

 a {
  img {
   max-height: 15vw;
  }
 }

 div {
  max-width: 78%;
  margin-left: 2vw;

  span {
   color: ${transparentize(0.5, '#000')};
  }

  p {
   margin-top: 2vh;
  }
 }
`;
