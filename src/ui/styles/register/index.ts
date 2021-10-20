import { styled } from '@linaria/react';

export const Styling = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 3vh 2vw 8vh;
 border-top: 1px solid #ddd;

 h1 {
  color: #f70;
  font-variant: small-caps;
  font-weight: 500;
  font-stretch: 110%;
  font-size: 1.4em;
 }

 form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 56%;

  fieldset {
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 10%;
   margin-top: 1vw;
   width: 100%;

   div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    label {
     color: #777;
     font-style: italic;
     margin-bottom: 0.3vw;
    }

    input,
    select {
     padding: 0 0.5vw;
     border: 1px solid rgba(0, 0, 0, 0.4);
     border-radius: 5px;
     font-size: 1rem;
     height: 2.3vw;
    }

    p {
     color: #fff;
     background: #f00;
     box-shadow: 0 0 8px #000;
     border-radius: 10px;
     position: absolute;
     max-width: 80%;
     right: -5%;
     bottom: 50%;
     padding: 0 6px;
    }

    p.long-error {
     max-width: 60%;
    }
   }

   &:last-of-type {
    display: block;

    div {
     display: inline-block;
     margin-bottom: 1vw;

     input {
      height: auto;
      margin-right: 0.5vw;
     }

     label {
      color: #000;
      font-style: normal;
     }

     p {
      all: unset;
      display: block;
      margin-bottom: 0.5vw;
      font-weight: 700;
      color: #f00;
     }
    }
   }
  }

  a {
   align-self: flex-start;
   font-size: 0.94em;
  }

  button {
   margin: 1vw 0;
   max-width: 50%;
  }

  button:disabled {
   background-color: #0007;
   pointer-events: none;
  }
 }
`;
