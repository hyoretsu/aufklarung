import { transparentize } from 'polished';
import styled from 'styled-components';

export const Section = styled.section`
 display: flex;
 flex-direction: column;
 flex: 1;

 padding: 2vh 2vw;
 font-size: 0.9em;

 @media (max-width: 426px) {
  padding: 2vh 4vw;

  &:last-of-type {
   padding-bottom: 3vh;
  }

  p {
   text-align: unset;
  }
 }

 h3 {
  a {
   font-variant: small-caps;
   color: #ff7f00;

   &:hover {
    color: #4b7d92;
   }
  }
 }

 div {
  display: flex;
  align-items: center;
  color: ${transparentize(0.5, '#000')};

  margin: 10px 0;

  svg {
   height: 18px;
   width: auto;
   color: #ddd;
  }
 }

 > a {
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #ff7f00;

  svg {
   margin: 5px;
  }

  &:hover {
   color: #4b7d92;
  }
 }
`;
