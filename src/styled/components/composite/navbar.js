import styled, {css} from "styled-components";

export const NavbarContainer = styled.header`
    width: 100%;
    height: 61px;
    background-color: var(--black-gradient-color);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    
    @media screen and (min-width: 992px) {
        height: 91px;

        button {
            display: none;
        }
    }
`;

export const NavbarContent = styled.nav`
    width: 100%;
    height: 100%;
    padding: var(--padding-content-sm);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @media screen and (min-width: 992px) {
        max-width: var(--max-width);
        margin: auto;
        justify-content: flex-start;
        gap: 73px;
    }
`;
 
export const Logo = styled.a`
    color: var(--text-light-color);
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.1px;
    font-size: var(--fs-md);

    @media screen and (min-width: 992px) {
        font-size: var(--fs-lg);
    }
`;

export const LinksList = styled.ul`
    width: 100%;
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

    @media screen and (min-width: 768px) {
        width: 250px;
    }

    @media screen and (min-width: 992px) {
        width: auto;
        height: auto;
        position: static;
        background-color: transparent;
        flex-direction: row;
        align-items: center;
        gap: 21px;
    }
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

    @media screen and (min-width: 992px) {
        width: auto;
        padding: 0;

        &:hover {
            background-color: transparent;
        }
    }
`;