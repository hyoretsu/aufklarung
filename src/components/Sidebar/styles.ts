import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.aside`
 display: flex;
 flex-direction: column;
 margin-top: 4vh;
 margin-left: 2vw;

 strong {
  margin-bottom: 4vh;

  font-size: 1em;
  font-weight: 700;
  color: ${transparentize(0.5, '#000')};
 }
`;

export const SubmissionButton = styled.button`
 background-color: #4b7d92;
 font-size: 0.9em;
 font-weight: 700;
 color: #fff;

 padding: 0.8vh 0.7vw;
 border: 1px solid ${transparentize(0.6, '#000')};
 border-radius: 0.2vw;

 &:hover {
  background-color: #ff7f00;
 }
`;
