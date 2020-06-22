import styled from 'styled-components';

export const Container = styled.div`
 font-size: 0.9em;
 margin: 2vh auto 2vh 2vw;

 @media (max-width: 462px) {
  margin: 2vh 4vw;
 }

 span:last-of-type {
  cursor: text !important;

  a {
   pointer-events: none;
   color: #ff9000;
  }
 }
`;
