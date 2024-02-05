import styled, {css} from "styled-components";

export const PricingCardStyled = styled.div`
    width: 100%;
    max-width: 338px;
    padding: var(--padding);
    background-color: var(--light-background-color);
    display: flex;
    flex-direction: column;
    gap: 35px;
    border-radius: var(--radius);
    border: 1px solid var(--primary-color);
    align-items: center;
    padding: 30px;

    h3 {
        font-size: var(--fs-md);
        color: var(--text-color);
    }

    h4 {
        font-size: var(--fs-sm);
        color: var(--second-text-color);
    } 

    .button-action {
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        h3 {
            font-size: var(--fs-lg);
        }

        h4 {
            font-size: var(--fs-md);
        }
    }

`;

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--primary-color);
    
    h3 {
        font-size: var(--fs-xxl);
        color: var(--primary-color);
    }
  
`;

export const PriceInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;

    .currency-symbol {
        font-size: var(--fs-md);
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.1px;
    }

    .currency-time {
        font-size: var(--fs-xs);
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0.2px;
        color: var(--disabled-element-color);
    }
`;

export const BenefitsList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 17px;
`;

export const BenefitsItem = styled.li`
    display: flex;
    align-items: center;
    gap: 5px;

    svg {
        font-size: var(--fs-lg);
        color: var(--muted-color);
    }

    p {
        font-size: var(--fs-xs);
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0.2px;
        color: var(--text-color);
    }
    
    ${props => props.checked && css`
        svg {
            color: var(--success-color);
        }
    `}

    @media screen and (min-width: 768px) {
        svg {
            font-size: var(--fs-xl);
        }

        p {
            font-size: var(--fs-sm);
        }

    }
`;