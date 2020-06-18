import styled from 'styled-components';

export const Container = styled.article``;

export const Introduction = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;

 padding: 2vh 2vw;
 border-bottom: 1px solid #ddd;

 @media (max-width: 426px) {
  padding: 2vh 3vw;
 }

 strong {
  align-self: flex-start;
  margin-bottom: 2vh;
 }

 img {
  width: auto;
  max-width: 100%;
  max-height: 85vh;
 }

 span {
  font: 1em 'Segoe UI';
  color: #000;
  margin-top: 2vh;

  strong {
   color: #777;
  }
 }
`;

export const Section = styled.section``;
