import styled from 'styled-components';

export const Container = styled.div`
    font-size: 0.9em;
    margin: 2vh 2vw;

    @media (max-width: 462px) {
        margin: 2vh 4vw;
    }

    span:last-of-type {
        color: #f70;
    }
`;
