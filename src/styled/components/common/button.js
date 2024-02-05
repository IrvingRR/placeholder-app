import styled, {css} from "styled-components";

export const ButtonStyled = styled.button`
    padding: 13px 20px;
    border-radius: var(--radius);
    font-weight: bold;
    letter-spacing: 0.2px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: var(--fs-xs);
    transition: var(--transition);

    svg { color: var(--text-light-color); }

    ${props => props.rounded && css`
        border-radius: var(--radius-rounded);
    `}

    ${props => {
        switch (props.variant) {
            case 'outlined': 
                return css`
                    background-color: transparent;
                    color: var(--text-dark-color);
                    border-color: var(--primary-color);

                    svg { color: var(--text-dark-color); }
                    
                    &:hover {
                        background-color: var(--primary-color);
                        color: var(--text-light-color);

                        svg { color: var(--text-light-color); }
                    }
                `

            case 'outlined-light': 
                return css`
                    background-color: transparent;
                    color: var(--text-light-color);
                    border-color: var(--text-light-color);

                    &:hover {
                        background-color: var(--primary-color);
                        color: var(--text-light-color);
                    }
                `        
            default:
                return css`
                    background-color: var(--primary-color);
                    color: var(--text-light-color);
                `
        }
    }}

    @media screen and (min-width: 768px) {
        padding: 15px 36px;
        font-size: var(--fs-sm);   
    }
`;