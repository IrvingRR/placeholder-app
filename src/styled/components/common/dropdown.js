import styled, {css} from "styled-components";

export const DropdrownContainer = styled.div`
    width: 100%;
    max-width: ${props => props.max_width};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 10px;
    border: 1px solid var(--border-color);
    cursor: pointer;
    border-radius: var(--radius);
    font-size: var(--fs-sm);
    position: relative;
    gap: 20px;
    background-color: var(--input-background-color);
    color: var(--second-text-color);

    svg {
        font-size: var(--fs-md);
    }

    @media screen and (min-width: 768px) {
        height: 50px;
        font-size: var(--fs-md);

        svg {
            font-size: var(--fs-lg);
        }
    }
`;

export const Options = styled.ul`
    width: 100%;
    max-height: 200px;
    overflow: auto;
    border-radius: var(--radius);
    position: absolute;
    transition: var(--transition);
    border: 1px solid var(--border-color);
    top: 40px;
    right: 0;
    transform: translateY(-5px);
    opacity: 0;
    visibility: hidden;
    background-color: var(--input-background-color);
    z-index: 99;

    ${props => props.visible && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}

    @media screen and (min-width: 768px) {
        top: 55px;
        font-size: var(--fs-md);
    }
`;

export const Option = styled.li`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: var(--fs-sm);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
        background-color: var(--primary-color);
        color: var(--text-light-color);
    }
`;

export const Legend = styled.div`
    padding: 10px 20px;
`;