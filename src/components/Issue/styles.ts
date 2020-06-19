import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.article`
 span {
  display: block;
  font: 700 0.9em 'Segoe UI';
  margin: 2vh 0 0 2vw;

  @media (max-width: 426px) {
   margin-left: 4vw;
  }
 }

 > strong {
  font: small-caps 700 1.4em 'Segoe UI';
  color: ${transparentize(0.5, '#000')};

  margin: 1vh 0 0 2vw;

  @media (max-width: 426px) {
   margin-left: 4vw;
  }
 }

 > div {
  border-bottom: 1px solid #ddd;
 }
`;

export const Introduction = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;

 padding: 2vh 2vw;

 @media (max-width: 426px) {
  padding: 2vh 4vw;
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

export const Section = styled.section`
 display: flex;
 flex-direction: column;
 padding: 1vh 2vw 2vh;

 @media (max-width: 426px) {
  padding: 1vh 4vw 2vh;

  &:last-of-type {
   padding-bottom: 3vh;
  }
 }

 a {
  color: #ff9000;
  margin-right: auto;
  font: small-caps 1.4em 'Segoe UI';

  &:hover {
   color: #4b7d92;
  }
 }

 div {
  display: flex;
  justify-content: space-between;
  font: 0.9em 'Segoe UI';
  margin: 0.5vh 0 1.5vh;

  p {
   flex: 1;
  }

  span {
   color: ${transparentize(0.5, '#000')};
   margin-left: 2vw;
  }
 }

 button {
  display: flex;
  align-self: flex-start;
  background: #4b7d92;
  color: #fff;

  padding: 1vh 1vw;
  border-radius: 3px;

  @media (max-width: 426px) {
   padding: 1vh 4vw;
  }

  svg {
   margin-right: 0.5vw;
  }

  &:hover {
   background: #ff9000;
  }
 }
`;
