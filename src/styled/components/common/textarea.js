import styled, {css} from 'styled-components';

export const TextareaGroup = styled.div`
    width: 100%;
    max-width: ${props => props.max_width};
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const TextareaContent = styled.div`
    width: 100%;
    height: 140px;
`;

export const TextareaElement = styled.textarea`
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    border-radius: var(--radius);
    border-color: var(--border-color);
    background-color: var(--input-background-color);
    color: var(--text-color);
    line-height: 23px;
    transition: var(--transition);
    resize: none;

    &::placeholder {
        color: var(--second-text-color);
    }

    &:focus {
        border-color: var(--primary-color);
        background-color: transparent
    }

    ${props => props.error && css`
        border-color: var(--error-color) !important;
        color: var(--error-color) !important;
    `}

    ${props => props.rounded && css`border-radius: var(--radius-rounded);`}
`;

export const Legend = styled.div`
    color: var(--error-color);
    font-size: var(--fs-sm);
`;