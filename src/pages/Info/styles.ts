import styled from 'styled-components';

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
  color: #ff9000;
  margin-bottom: 1vh;
 }

 p {
  font-size: 0.9em;
 }
`;
