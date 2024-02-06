import styled, {css} from 'styled-components';

export const InputGroup = styled.div`
    width: 100%;
    max-width: ${props => props.max_width};
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const InputContent = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    position: relative;

    svg {
        position: absolute;
        left: 15px;
        font-size: var(--fs-sm);
        color: ${props => props.theme.placeholderColor};
    }
`;

export const InputElement = styled.input`
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    border-radius: var(--radius);
    border-color: var(--border-color);
    background-color: var(--input-background-color);
    color: var(--text-color);
    transition: var(--transition);
    font-size: var(--fs-sm);
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.2px;

    &::placeholder {
        color: var(--second-text-color);
    }

    &:focus {
        border-color: var(--primary-color);
        background-color: transparent;

        & ~ svg { color: var(--primary-color); }
    }

    &:disabled {
        background-color: var(--muted-color);
    }

    ${props => props.icon && css`
        padding: 10px 20px 10px 35px;
    `}

    ${props => props.error && css`
        border-color: var(--error-color) !important;
        color: var(--error-color) !important;
        
        & ~ svg {
            color: var(--error-color) !important;
        }
    `}

    ${props => props.rounded && css`border-radius: var(--radius-rounded);`}

    @media screen and (min-width: 768px) {
        height: 50px;
        font-size: var(--fs-md);
    }
`;

export const Legend = styled.div`
    color: var(--error-color);
    font-size: var(--fs-sm);
`;