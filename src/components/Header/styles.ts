import styled from 'styled-components';

export const Container = styled.header`
 background: #e7e7e7;
 width: auto;

 div {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 2vw;
  border-bottom: 0.1vh solid #ff7f00;

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

 > a {
  cursor: default;

  img {
   height: 7.2vw;
   display: block;
   margin: 0.7vw auto 1vw;
   cursor: pointer;
  }
 }
`;

export const Navigation = styled.nav`
 display: flex;

 label {
  cursor: pointer;

  ul {
   display: none;
   list-style: none;
  }

  &:hover ul {
   display: block;
  }
 }

 button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: small-caps 600 1em 'Segoe UI';
  color: #ff7f00;
  margin-left: auto;
  padding: 1.5vh 1vw 1vh;
  box-sizing: border-box;
  max-height: 100%;

  background: transparent;
  border: none;

  svg {
   margin-right: 0.5vw;
   height: 2.4vh;
   width: auto;
  }

  &:hover {
   color: #007ab2;
   padding-bottom: 0.6vh;
   border-bottom: 0.4vh solid #007ab2;
  }
 }
`;
