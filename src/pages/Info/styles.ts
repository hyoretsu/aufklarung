import styled from 'styled-components';

export const Styling = styled.div`
 > h2 {
  font-variant: small-caps;
  color: #ff9000;
  margin: 2vh 0 0 2vw;

  @media (max-width: 426px) {
   margin-left: 4vw;
  }
 }
`;

export const Section = styled.section`
 margin: 2vh 2vw 0;

 @media (max-width: 426px) {
  margin-left: 4vw;
 }

 &:last-of-type {
  margin-bottom: 2vh;

  @media (max-width: 426px) {
   margin-bottom: 3vh;
  }
 }

 h3 {
  font-variant: small-caps;
  color: #ff9000;
  margin-bottom: 1vh;
 }

 p {
  font-size: 0.9em;
 }
`;
