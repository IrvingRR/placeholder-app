import styled from "styled-components";
import AmountInvestmentBackground from "../../../assets/images/amount-investment-background.png"

export const AmountInvestmentContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--padding);

    @media screen and (min-width: 768px) {
        height: 524px;
        display: flex;
        padding: 0 16px;
    }
`;

export const AmountInvestmentVideo = styled.video`
    width: 100%;
    min-height: 100%;
    object-fit: cover;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
    }

    @media screen and (min-width: 992px) {
        max-height: 524px;
    }

`;

export const AmountInvestmentContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    padding: 23px;
    border-radius: var(--radius-md);
    background-image: url(${AmountInvestmentBackground});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 99;
    position: relative;

    @media screen and (min-width: 992px) {
        max-width: var(--max-width);
    }
`;

export const AmountInvestmentHeader = styled.div`
    text-align: center;
    border-radius: var(--radius);
    color: var(--text-dark-color);
    padding: var(--padding);
    background-color: var(--primary-color);
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.2px;
    font-size: var(--fs-md);
    justify-self: flex-start;
    margin-bottom: 30px;

    @media screen and (min-width: 992px) {
        font-size: var(--fs-xl);
        padding: 21px 61px;
    }
`;

export const AmountInvestmentProfit = styled.div`
    width: 150px;
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: var(--primary-color);
    color: var(--text-light-color);
    font-size: var(--fs-sm);
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.2px;
    border-radius: var(--radius-md);
    justify-self: flex-end;
    position: relative;
    top: 55px;
    left: 0;
    right: 0;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        top: 55px;
    }

    @media screen and (min-width: 992px) {
        width: 264px;
        height: 100px;
        font-size: var(--fs-lg);
        gap: 20px;
        font-style: normal;
        letter-spacing: 0.2px;
        top: 70px;
    }
`;