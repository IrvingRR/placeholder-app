import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
`;

export const FooterContent = styled.div`
    width: 100%;
    max-width: var(--max-width);
    padding: var(--padding-content);
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: auto;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

export const FooterList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-evenly;
    }
`;

export const FooterItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;

    h3 {
        font-size: var(--fs-md);
        color: var(--text-color);
        font-style: normal;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0.1px;
        padding-bottom: 10px;
    }

    p, a {
        font-size: var(--fs-xs);
        color: var(--second-text-color);
    }

    @media screen and (min-width: 768px) {
        align-items: flex-start;
        text-align: left;
    }

    @media screen and (min-width: 992px) {
        gap: 20px;

        h3 {
            font-size: var(--fs-lg);
        }

        p, a {
            font-size: var(--fs-sm);
        }
    }
    
`;

export const FooterSocialMediaList = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    a {
        color: var(--primary-color);
        font-size: var(--fs-lg);
    }

`;

export const FooterSocialMedia = styled.a`
    color: var(--primary-color);
    font-size: var(--fs-lg);
`;

export const FooterCopyRight = styled.div`
    width: 100%;
    padding: var(--padding);
    background-color: var(--second-light-background-color);
    font-size: var(--fs-xs);
    text-align: center;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: var(--second-text-color);

    @media screen and (min-width: 768px) {
        font-size: var(--fs-sm);
    }
`;