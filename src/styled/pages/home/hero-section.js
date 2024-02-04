import styled from "styled-components";
import HeroBackground from '../../../assets/images/hero-background.jpg';

export const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${HeroBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;

    @media screen and (min-width: 992px) {
        height: 621px;
    }
`;

export const HeroContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 16px;
    
    @media screen and (min-width: 992px) {
        max-width: var(--max-width);
        margin: auto;
        gap: 63px;
        padding: 16px 0 0 16px;
        justify-content: space-between;

    }
`;

export const HeroTextInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 35px;
    color: var(--text-light-color);

    h1 {
        font-size: var(--fs-xl);
        font-weight: 800;
    }

    h3 {
        font-size: var(--fs-md);
        font-weight: 500;
    }

    @media screen and (min-width: 768px) {
        h1 {
            font-size: var(--fs-xxl);
        }

        h3 {
            font-size: var(--fs-lg-sm);
        }   
    }

    @media screen and (min-width: 992px) {
        align-items: flex-start;
        text-align: left;
        align-self: center;
        gap: 0;
        align-self: flex-end;

        
        h1 {
            font-size: var(--fs-xxxl);
            line-height: 80px;
            letter-spacing: 0.2px;
            padding: 35px 0;
        }

        h3 {
            width: 80%;
            line-height: 30px;
            letter-spacing: 0.2px;
        }
    }
`;

export const HeroActions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 45px;
`;

export const HeroManImage = styled.img`
    display: none;

    @media screen and (min-width: 992px) {
        display: block;
        align-self: flex-end;
    }
`;