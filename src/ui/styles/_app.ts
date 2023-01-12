import styled from 'styled-components';

export const Styling = styled.div`
    box-shadow: 0 0 10px #0007;

    @media (min-width: 427px) {
        margin: 2% 7%;
    }
`;

export const Content = styled.div`
    display: flex;
    padding: 4vh 1vw;

    @media (max-width: 426px) {
        padding: 4vh 4vw;
    }
`;

export const Body = styled.main`
    background-color: #fff;
    flex: 1;
    min-width: 70%;
    border: 1px solid #479;
    border-radius: 0 35px;
`;

export const AdminTopBar = styled.div`
    margin-top: 1%;

    button {
        svg {
            position: absolute;
            right: 1%;
            top: 1.3%;
        }
    }
`;

export const AdminNav = styled.nav`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 50%;
    margin: 0 auto;
    border: 3px solid #006798;
    border-radius: 12px;
    background-color: #fff;

    a {
        color: #000;
        padding: 7% 0;
        text-align: center;

        &:first-of-type {
            border-radius: 9px 0 0 9px;
        }
        &:last-of-type {
            border-radius: 0 9px 9px 0;
        }

        & + a {
            border-left: 3px solid #ddd;
        }

        &:hover {
            color: #f70;
            background-color: #f3f3f3;
        }
    }
`;
