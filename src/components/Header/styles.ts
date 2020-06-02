import styled from 'styled-components';

export const Container = styled.header`
 background: #e7e7e7;

 div {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 2vw;
  border-bottom: 1px solid #ff7f00;

  a {
   color: #ff7f00;
   font: small-caps 600 0.8em 'Segoe UI';
   margin-right: 2vw;

   &:hover,
   &:focus {
    color: #007ab2;
   }
  }
 }
`;
