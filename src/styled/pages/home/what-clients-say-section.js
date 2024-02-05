import styled from "styled-components";

export const WhatClientSayContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: var(--light-background-color);
    padding-bottom: 60px;
    
    /* @media screen and (min-width: 992px) {
        padding-bottom: 60px;
    } */
`;

export const WhatClientSayContent = styled.div`
    width: 100%;
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    padding: var(--padding-content);
    margin: auto;

    @media screen and (min-width: 992px) {
        /* padding: 0 16px; */
    }
`;

export const WhatClientSayText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;

    h2 {
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0.2px;
        color: var(--text-color);
        font-size: var(--fs-lg);
    }

    p {
        line-height: 20px;
        letter-spacing: 0.2px;
        color: var(--second-text-color);
        font-weight: 500;
        font-size: var(--fs-xs);
    }

    @media screen and (min-width: 768px) {
        width: 450px;
        gap: 20px;
        
        h2 {
            font-size: var(--fs-xxl);
        }

        p {
            font-size: var(--fs-sm);
        }
    }
`;