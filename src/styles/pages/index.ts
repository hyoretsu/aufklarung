import styled from 'styled-components';

export const Styling = styled.div`
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

export const HomepageNews = styled.div`
 display: flex;
 flex-wrap: wrap;

 section + section {
  max-width: 370px;
  border-left: 1px solid #ddd;

  div {
   margin: auto 0;
  }

  @media (max-width: 426px) {
   border-left: none;
  }
 }
`;
