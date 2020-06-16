import styled from 'styled-components';

export const Content = styled.div`
 display: flex;
 background: #f5f5f5;
 margin: 4vh 1vw;

 @media (max-width: 426px) {
  margin: 4vh 3vw;
 }
`;

export const Body = styled.main`
 flex: 1;
 background: #fff;
 min-width: 70%;
 border: 1px solid #4b7d92;
 border-radius: 0 35px;
`;
