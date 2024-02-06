import styled from "styled-components";
import SliderIcon from "../../../assets/images/slider-icon.svg";

export const RangeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 768px) {
        gap: 30px;
    }
`;

export const RangeAmountContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    h3 {
        font-size: var(--fs-md);
        color: var(--text-dark-color);
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0.2px;
    }

    @media screen and (min-width: 768px) {
        h3 {
            font-size: var(--fs-xl);
        }
    }
`;

export const RangeBar = styled.input`
    width: 100%;
    height: 100%;
    background-color: var(--gray-color);
    border-radius: 7px;
    -webkit-appearance: none;
    -webkit-transition: var(--transition);

    &::-webkit-slider-thumb {
        appearance: none;
        width: 100px;
        height: 40px;
        background-color: var(--primary-color);
        background-image: url(${SliderIcon});
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        border-radius: var(--radius-md);
    }

`;

export const RangeBarContainer = styled.div`
    width: 100%;
    height: 10px;
    position: relative;
`;

export const RagenSelectorElement = styled.div`
    width: 50px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: var(--radius);
    background-color: var(--primary-color);
    position: absolute;
    top: 50%;
    bottom: 50%;
    margin: auto 0;

    svg {
        color: var(--text-light-color);
        font-size: var(--fs-lg);
    }
`;