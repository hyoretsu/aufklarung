import styled from 'styled-components';

interface SwitchButtonProps {
    active: boolean;
    side: 'approved' | 'queue';
}

export const Styling = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    margin: 1% auto 3%;
    border-radius: 20px;
    border: 3px solid #000;
    background-color: #fff;
`;

export const Switch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1vh;

    span {
    }
`;

export const SwitchButton = styled.button.attrs({ type: 'button' })<SwitchButtonProps>`
    flex: 0.5;

    background-color: rgba(
        ${({ side }) => (side === 'queue' ? 255 : 0)},
        ${({ side }) => (side === 'queue' ? 0 : 255)},
        0,
        ${({ active }) => (!active ? 0.8 : 1)}
    );
    ${({ active }) => !active && { opacity: 0.5 }};

    border-radius: ${({ side }) => (side === 'queue' ? '1vw 0 0 1vw' : '0 1vw 1vw 0')};
    padding: 10% 15%;
    ${({ side }) => (side === 'queue' ? { marginLeft: '1vw' } : { marginRight: '1vw' })}
`;

export const Submission = styled.div`
    display: flex;
    align-items: center;
    border: 3px solid #006798;
    border-radius: 16px;
    margin: 2% 0;
    padding: 1% 3%;
    font-size: 1.1rem;
    cursor: pointer;

    & + & {
        margin-top: 0;
    }

    div {
        flex: 1;
    }

    span {
        padding: 0.5% 1%;
        border: 3px solid #f00;
        border-radius: 8px;
    }
`;
