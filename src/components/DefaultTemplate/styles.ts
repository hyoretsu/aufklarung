import styled from 'styled-components';

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

 > h3 {
  font: small-caps 700 1.2em 'Segoe UI';
  color: #ff9000;
  margin: 1vh auto 0 2vw;

  @media (max-width: 426px) {
   margin-left: 4vw;
  }
 }
`;
