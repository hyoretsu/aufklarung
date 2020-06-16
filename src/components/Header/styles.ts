import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.header`
 background: #e7e7e7;
 display: flex;
 flex-direction: column;
 width: auto;

 > a {
  margin: 0 auto;

  img {
   max-width: 100%;
   display: block;
   padding: 1.5vh 0 1vh;
   cursor: pointer;
  }
 }
`;

export const UserNav = styled.div`
 display: flex;
 align-items: center;
 justify-content: flex-end;
 border-bottom: 1px solid #ff7f00;
 padding: 5px 0;

 a {
  color: #ff7f00;
  font: small-caps 600 0.9em 'Segoe UI';
  margin-right: 2vw;

  @media (max-width: 426px) {
   font-size: 1em;
  }

  &:hover {
   color: #007ab2;
  }
 }
`;

export const Navigation = styled.nav`
 display: flex;
 justify-content: center;
 flex-wrap: wrap;

 > a {
  font: small-caps 400 1.4em 'Segoe UI';
  color: #ff7f00;
  padding: 1.5vh 1.3vw 1vh 1vw;

  & + a {
   padding-left: 1.3vw;
  }

  &:hover {
   color: #007ab2;
   padding-bottom: calc(0.6vh - 2px);
   border-bottom: 2px solid #007ab2;
  }
 }
`;

export const Dropdown = styled.div`
 cursor: pointer;
 font: small-caps 1.4em 'Segoe UI';
 position: relative;
 color: #ff7f00;

 padding: 1.5vh 1.3vw 1vh;

 svg {
  margin: auto 0;
  height: 2vh;
  width: auto;
 }

 ul {
  display: none;
  background-color: #fff;
  width: 190%;
  list-style: none;
  border-radius: 8px;

  position: absolute;
  left: 0;
  margin-top: 1vh;
  box-shadow: 0 0 8px ${transparentize(0.3, '#000')};

  li {
   padding: 4px 5px;

   a {
    font: small-caps 1em 'Segoe UI';
    color: #ff7f00;
   }

   &:hover {
    background: #ddd;
    padding-left: 2px;
    border-left: 3px solid #007ab2;

    & a {
     color: #007ab2;
    }
   }

   &:first-child {
    border-top-left-radius: 6px;
   }
   &:last-child {
    border-bottom-left-radius: 6px;
   }
  }
 }

 &:hover {
  color: #007ab2;

  & ul {
   display: block;
  }
 }
`;

export const Search = styled.button`
 display: flex;
 align-items: center;
 justify-content: center;
 font: small-caps 600 1em 'Segoe UI';
 color: #ff7f00;
 margin-left: auto;
 padding: 2vh 1vw 1vh;

 background: transparent;
 border: none;

 @media (max-width: 426px) {
  flex-basis: 100%;
  padding: 1vh 0;
 }

 svg {
  margin-right: 0.5vw;
 }

 &:hover {
  color: #007ab2;
  padding-bottom: calc(0.6vh - 2px);
  border-bottom: 2px solid #007ab2;
 }
`;
