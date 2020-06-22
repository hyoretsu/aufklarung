import styled from 'styled-components';
import { transparentize } from 'polished';

export const Styling = styled.div`
 margin: 2vh 2vw 2vh 2vw;

 @media (max-width: 426px) {
  margin-left: 4vw;
  margin-bottom: 3vh;
 }

 > h2 {
  font-variant: small-caps;
  color: #ff9000;
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

   margin-right: ${window.location.pathname.includes('/news') ? '1%' : '2%'};
  }
 }

 p {
  font-size: 0.9em;
  line-height: 1.7;
 }
`;
