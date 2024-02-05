import styled from "styled-components";

export const SliderContainer = styled.div`
    width: 100%;

    .slick-slider {
        overflow: hidden;
    }


    .slick-slide > div {
        margin: 0 15px;

        @media screen and (min-width: 768px) {
            width: 350px;
            margin: 0 10px;
        }
    }

    .slick-list {
        margin: 0 -15px;

        @media screen and (min-width: 768px) {
            margin: 0 -250px;
        }

        @media screen and (min-width: 992px) {
            margin: 0 -100px;
        }
    }

    .center .slick-center .client-card {
        transform: scale(1.1);
        z-index: 99;

        .slide-info {
            opacity: 1;
            visibility: visible;
            bottom: 10px;
        }
    }

`;

export const SliderCard = styled.div`
    width: 350px;
    height: 400px;
    box-shadow: 0px 0px 5px 3px rgba(193,193,193,0.75);
    -webkit-box-shadow: 0px 0px 5px 3px rgba(193,193,193,0.75);
    -moz-box-shadow: 0px 0px 5px 3px rgba(193,193,193,0.75);
    position: relative;
    cursor: grab;
    transform: scale(0.9);
    outline: none;

    @media screen and (min-width: 768px) {
        width: 350px;
        height: 500px;
    }
`;

export const SliderCardImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const SliderCardInfo = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 10px;
    background-color: var(--primary-gradient-color);
    color: var(--text-light-color);
    padding: 19px 15px;
    font-size: var(--fs-sm);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.2px;
    text-align: center;
    opacity: 0;
    visibility: hidden;
    bottom: -100%;
    transition: var(--transition);

    @media screen and (min-width: 768px) {
        font-size: var(--fs-md);
    }

    @media screen and (min-width: 992px) {
        font-size: var(--fs-lg);
    }
`;