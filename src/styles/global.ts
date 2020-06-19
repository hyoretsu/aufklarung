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
  background: #f5f5f5;
  -webkit-font-smoothing: antialiased;
 }

 #root {
  box-shadow: 0 0 10px ${transparentize(0.5, '#000')};
  background: #f5f5f5;
 }
 @media (min-width: 427px) {
  #root {
   margin: 2% 7%;
  }
 }

 button {
  cursor: pointer;
  background: transparent;
  border: none;
 }

 a {
  color: #65a6c2;
  text-decoration: none;

  &:hover {
   color: #ff7f00;
  }
 }
`;
