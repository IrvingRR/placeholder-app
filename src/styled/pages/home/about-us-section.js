import styled from "styled-components";
import AboutUsBackground from "../../../assets/images/about-background.png"
import AboutUsVideoBackground from "../../../assets/images/video-youtube-background.png"

export const AboutUsContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url(${AboutUsBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const AboutUsContent = styled.div`
    width: 100%;
    max-width: var(--max-width);
    height: 100%;
    padding: var(--padding-content);
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: auto;

    @media screen and (min-width: 992px) {
        gap: 92px;
    }
`;

export const AboutUsText = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    flex-direction: column;
    gap: 10px;
    color: var(--text-light-color);

    h2 {
        font-weight: 700;
        line-height: 57px;
        letter-spacing: 0.2px;
        font-size: var(--fs-lg);
    }

    p {
        line-height: 20px;
        letter-spacing: 0.2px;
        font-weight: 500;
        font-size: var(--fs-xs);
    }

    @media screen and (min-width: 768px) {
        width: 470px;
        
        h2 {
            font-size: var(--fs-xxl);
        }

        p {
            font-size: var(--fs-sm);
        }
    }
`;

export const AboutUsInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media screen and (min-width: 992px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 95px;
    }
`;

export const AboutUsVideoContainer = styled.div`
    width: 100%;
    height: 250px;
    position: relative;
    background-image: url(${AboutUsVideoBackground});
    background-repeat: no-repeat;
    background-position: center;

    @media screen and (min-width: 768px) {
        width: 500px;
        height: 300px;
        margin: auto;
    }

    @media screen and (min-width: 992px) {
        width: 592px;
        height: 442px;
        flex-shrink: 0; 
    }
`;

export const AboutUsVideoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const AboutUsVideoLink = styled.a`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--padding);
    position: absolute;
    top: 0;
    left: 0;
`;

export const AboutUsVideoButton = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: var(--primary-color);

    svg {
        font-size: 30px;
        color: var(--text-light-color);
    }
`;

export const AboutUsInfoOurField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: var(--text-light-color);
    gap: 30px;

    .text-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    h3 {
        font-size: var(--fs-md);
        font-weight: 500;
        font-style: normal;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0.1px;
    }

    p {
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.2px;
        font-size: var(--fs-xs);
    }

    @media screen and (min-width: 768px) {
        width: 470px;
        margin: auto;
        text-align: left;

        h3 {
            font-size: var(--fs-lg);
        }

        p {
            font-size: var(--fs-sm);
        }
    }

    @media screen and (min-width: 992px) {
        width: 100%;
    }
`;

export const AboutUsOurFieldList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const AboutUsOurFieldListItem = styled.ul`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 16px;

    svg {
        font-size: var(--fs-lg);
        color: var(--primary-color);
    }

    @media screen and (min-width: 992px) {
        svg {
            font-size: var(--fs-xl);
        } 
    }
`;

export const AboutUsOurFiledItemContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: left;

    h4 {
        font-size: var(--fs-xs);
        font-weight: 500;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0.1px;
    }

    p {
        font-size: var(--fs-xxs);
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0.2px;
    }

    @media screen and (min-width: 768px) {
       h4 {
        font-size: var(--fs-md);
        line-height: 24px;
       }

       p {
        font-size: var(--fs-sm);
        line-height: 24px;
       }
    }
`;