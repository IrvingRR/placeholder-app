import styled, {css} from "styled-components";

export const NavbarContainer = styled.header`
    width: 100%;
    height: 61px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    background-color: var(--black-gradient-color);
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
`;

export const Logo = styled.a`
    color: var(--text-light-color);
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.1px;
    font-size: var(--fs-md);
`;

export const LinksList = styled.ul`
    width: 50%;
    height: 90vh;
    background-color: var(--black-gradient-color);
    position: absolute;
    left: 0;
    top: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: var(--transition);
    left: -100%;

    ${props => props.visible && css`
        left: 0;
    `}
`;

export const LinkItem = styled.li`
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: red;
`;

export const Link = styled.a`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    font-size: var(--fs-sm);
    color: var(--text-light-color);
    font-weight: 600;

    &:hover {
        background-color: var(--primary-color);
    }
`;