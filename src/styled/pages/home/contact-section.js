import styled from "styled-components";

export const ContactContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: var(--second-light-background-color);
    position: relative;
`;

export const ContactContent = styled.div`
    padding: var(--padding-content);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 99;

    @media screen and (min-width: 768px) {
        max-width: var(--max-width);
        margin: 0 auto;
    }
`;

export const ContactMap = styled.img`
    width: 100%;
    height: 50vh;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;