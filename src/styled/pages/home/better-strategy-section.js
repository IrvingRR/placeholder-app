import styled from "styled-components";

export const BetterStrategyContainer = styled.div`
    width: 100%;
    position: relative;

    @media screen and (min-width: 992px) {
        max-height: 612px;
    }
`;

export const BetterStrategyVideo = styled.video`
    width: 100%;
    min-height: 100%;
    object-fit: cover;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    @media screen and (min-width: 992px) {
        max-height: 612px;
    }

`;

export const BetterStrategyContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    text-align: center;
    padding: var(--padding-content);
    z-index: 99;

    @media screen and (min-width: 992px) {
        max-width: var(--max-width);
        margin: auto;
        gap: 80px;
    }
`;

export const BetterStrategyText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

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
        color: var(--text-dark-color);
        font-weight: 500;
        font-size: var(--fs-xs);
    }

    @media screen and (min-width: 768px) {
        margin: auto;

        h2 {
            width: 450px;
            font-size: var(--fs-xl);
            line-height: 57px;
            letter-spacing: 0.2px;
        }

        p {
            width: 50%;
            padding: 0 16px;
            font-size: var(--fs-sm);
            line-height: 20px;
            letter-spacing: 0.2px;
            text-align: center;
        }
    }

    @media screen and (min-width: 992px) {
        h2 {
            font-size: var(--fs-xxl);
        }
    }
`;

export const BetterStrategyCards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media screen and (min-width: 992px) {
        justify-content: space-between;
        flex-wrap: nowrap;
        align-items: flex-start;
    }
`;