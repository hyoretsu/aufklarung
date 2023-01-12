import styled from 'styled-components';

export const Styling = styled.div`
    margin: 2vh 2vw;

    @media (max-width: 426px) {
        padding: 2vh 4vw 3vh 4vw;
    }

    > div {
        background: #ddd;
        padding: 2.8vh 1.3vw;
        border-left: 5px solid #479;
    }

    h2,
    h3 {
        font-variant: small-caps;
        font-stretch: 110%;
        color: #f70;
    }
    h2 {
        margin: 2vh 0;
    }
    h3 {
        margin: 1vh 0;
    }

    p,
    span {
        line-height: 1.5em;
    }
`;

export const Conditions = styled.section`
    margin-top: 4vh;

    ol {
        margin: 2vh 0;

        > li {
            position: relative;
            padding: 3vh 3vw;
            border: 1px solid #ddd;

            @media (max-width: 426px) {
                padding: 3vh 15%;
            }

            ul {
                list-style-type: disc;
            }

            svg {
                color: #0f0;
                position: absolute;
                left: 1.5%;
                top: 50%;
                transform: translate(0, -50%);

                @media (max-width: 426px) {
                    left: 3%;
                }
            }
        }
    }
`;

export const Guidelines = styled.section`
    > ol {
        list-style-type: none;
        counter-reset: item;

        > li {
            counter-increment: item;
            margin-bottom: 2vh;

            &:before {
                content: counters(item, '.') '. ';
            }

            &:before,
            > span {
                font-weight: 700;
                color: #f70;
            }
        }
    }
`;

export const SubList = styled.ol`
    list-style-type: none;
    counter-reset: item;
    line-height: 1.5em;

    > li {
        counter-increment: item;

        ul {
            list-style: none;
            margin-bottom: 1vh;
            margin-left: 1vw;

            li {
                margin-bottom: 1vh;
            }
        }

        &:before {
            content: counters(item, '.') ' ';
        }
    }
`;

export const Section = styled.section`
    ul {
        list-style: none;
    }
`;
