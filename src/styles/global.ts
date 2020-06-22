import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
 }

 body {
  font-family: 'Segoe UI';
  -webkit-font-smoothing: antialiased;
 }

 #root {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
 }

 p {
  text-align: justify;
 }

 a {
  color: #65a6c2;
  text-decoration: none;

  &:hover {
   color: #ff7f00;
  }
 }

 button {
  cursor: pointer;
  background: transparent;
  border: none;
 }
`;
