import styled from 'styled-components';

export const Styling = styled.div`
 padding: 2vh 2vw;
 border-top: 1px solid #ddd;

 @media (max-width: 426px) {
  padding: 2vh 4vw 3vh;

  h4 {
   margin-bottom: 1vh;
  }

  > a,
  p {
   line-height: unset;
   text-align: unset;
  }

  li + li {
   margin-top: 0.5vh;
  }
 }

 section {
  h4 {
   font-variant: small-caps;
   color: #ff9000;
  }

  > a,
  p {
   line-height: 1.5;
  }

  ol,
  ul {
   list-style-position: inside;
  }
  ol {
   margin-top: 1.5vh;
  }

  & + section {
   margin-top: 3vh;
  }
 }
`;
