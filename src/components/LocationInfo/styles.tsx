import styled from 'styled-components';

export const Container = styled.div`
 font: 0.9em 'Segoe UI';
 margin: 2vh auto 0 2vw;

 span:last-of-type {
  cursor: text !important;

  a {
   pointer-events: none;
   color: #ff9000;
  }
 }
`;
