import styled from 'styled-components';
import { transparentize } from 'polished';

export const HomepageNews = styled.div`
 display: flex;
 flex-wrap: wrap;
 border-bottom: 1px solid #ddd;

 section {
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 2vh 2vw;
  font-size: 0.9em;

  @media (max-width: 426px) {
   padding: 2vh 4vw;
  }

  h3 {
   a {
    font-variant: small-caps;
    color: #ff7f00;

    &:hover {
     color: #4b7d92;
    }
   }
  }

  div {
   display: flex;
   align-items: center;
   color: ${transparentize(0.5, '#000')};

   margin: 10px 0;

   svg {
    height: 18px;
    width: auto;
    color: #ddd;

    margin-right: 2%;
   }
  }

  > a {
   display: flex;
   align-items: center;
   font-weight: 700;
   color: #ff7f00;
   margin: auto auto 0 0;

   svg {
    margin: 5px;
   }

   &:hover {
    color: #4b7d92;
   }
  }

  & + section {
   max-width: 370px;
   border-left: 1px solid #ddd;

   div {
    margin: auto 0;
   }

   @media (max-width: 426px) {
    border-left: none;
    border-top: 1px solid #ddd;
   }
  }
 }
`;
