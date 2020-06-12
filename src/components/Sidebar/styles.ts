import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.aside`
 display: flex;
 flex-direction: column;
 width: 16vw;
 margin-left: 2vw;

 strong {
  margin-bottom: 4vh;

  font: 700 1em 'Segoe UI';
  color: ${transparentize(0.5, '#000')};
 }

 a {
  margin-right: auto;
 }
`;

export const SubmissionButton = styled.button`
 background-color: #4b7d92;
 font: 700 0.9em 'Segoe UI';
 color: #fff;

 padding: 0.7vh 0.7vw 0.8vh;
 border: 1px solid ${transparentize(0.6, '#000')};
 border-radius: 0.2vw;

 &:hover {
  background-color: #ff7f00;
 }
`;
