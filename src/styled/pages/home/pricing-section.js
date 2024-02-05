import styled, {css} from "styled-components";

export const PricingContainer = styled.div`
    width: 100%;
    min-height: 100vh;
`;

export const PricingContent = styled.div`
    width: 100%;
    max-width: var(--max-width);
    margin: auto;
    padding: var(--padding-content);
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media screen and (min-width: 768px) {
        gap: 80px;
    }
`;

export const PricingText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
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
`;

export const PricingCards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;
