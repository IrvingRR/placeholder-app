import styled from "styled-components";

export const StrategyCardStyled = styled.div`
    display: flex;
    width: 230px;
    padding: 30px 40px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-color: var(--text-light-color);

    svg {
        font-size: var(--fs-xxl);
        color: var(--primary-color);
    }

    h3 {
        font-size: var(--fs-lg);
        color: var(--text-color);
        font-weight: 700;
    }

    small {
        color: var(--second-text-color);
        font-weight: 700;
        font-size: var(--fs-sm);
    }

    @media screen and (min-width: 992px) {
        svg {
            font-size: 48px;
        }

        h3 {
            font-size: var(--fs-xxl);
        }
    }
`;