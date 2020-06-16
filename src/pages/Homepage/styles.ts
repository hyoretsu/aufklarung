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
  font: 0.9em 'Segoe UI';

  @media (max-width: 426px) {
   padding: 2vh 3vw;
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

  a {
   display: flex;
   align-items: center;
   font-weight: 700;
   color: #ff7f00;
   margin-right: auto;
   max-width: 90%;

   strong {
    font-variant: small-caps;
    font-size: 1.2em;
   }

   svg {
    margin: 5px;
   }

   &:hover {
    color: #65a6c2;
   }
  }

  p + a {
   margin-top: auto;
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
