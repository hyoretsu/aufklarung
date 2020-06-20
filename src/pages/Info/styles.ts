import styled from 'styled-components';

export const Container = styled.div`
 margin: 2vh 2vw;

 @media (max-width: 426px) {
  margin-left: 4vw;
  margin-bottom: 3vw;
 }

 h2,
 h3 {
  color: #ff9000;
 }

 section {
  h3 {
   margin: 2vh 0 1vh;
  }

  p {
   font-size: 0.9em;
  }
 }
`;
