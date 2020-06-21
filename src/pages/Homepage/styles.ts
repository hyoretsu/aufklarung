import styled from 'styled-components';

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
