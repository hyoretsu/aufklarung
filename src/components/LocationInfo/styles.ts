import styled from 'styled-components';

export const Container = styled.div`
 font-size: 0.9em;
 margin: 2vh auto 0 2vw;

 span:last-of-type {
  cursor: text !important;

  a {
   pointer-events: none;
   color: #ff9000;
  }
 }
`;
