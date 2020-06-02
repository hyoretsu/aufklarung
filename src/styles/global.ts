import { createGlobalStyle } from 'styled-components';
import { transparentize } from 'polished';

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
 }

 body {
  -webkit-font-smoothing: antialiased;
 }

 body, input, button {
  font: 16px sans-serif;
 }

 #root {
  background: #f5f5f5;
  box-shadow:${transparentize(0.5, '#000')} 0 0 10px;
  margin: 2vw 7vw;
 }

 button {
  cursor: pointer;
 }

 a {
  text-decoration:none;
 }
`;
