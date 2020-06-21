import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
 box-shadow: 0 0 10px ${transparentize(0.5, '#000')};

 @media (min-width: 427px) {
  margin: 2% 7%;
 }
`;

export const Content = styled.div`
 display: flex;
 background: #f5f5f5;
 margin: 4vh 1vw;

 @media (max-width: 426px) {
  margin: 4vh 4vw;
 }
`;

export const Body = styled.main`
 display: flex;
 flex-direction: column;
 flex: 1;
 background: #fff;
 min-width: 70%;
 border: 1px solid #4b7d92;
 border-radius: 0 35px;

 > h2 {
  color: #ff9000;
  margin: 2vh 0 0 2vw;

  @media (max-width: 426px) {
   margin-left: 4vw;
  }
 }

 > h3 {
  font-size: 1.4em;
  font-weight: 700;
  font-variant: small-caps;
  color: #ff9000;
  margin: 1vh auto 0 2vw;

  @media (max-width: 426px) {
   margin-left: 4vw;
  }
 }
`;
