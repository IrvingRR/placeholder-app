import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* Variables */

    :root {
        /* Colors */
        --light-background-color: rgba(255, 255, 255, 1);
        --second-light-background-color: rgba(250, 250, 250, 1);
        --primary-color: rgba(35, 166, 240, 1);
        --primary-gradient-color: rgba(24, 76, 154, 0.75);
        --black-gradient-color: rgba(45, 45, 45, 0.5);
        --white-color: rgba(255, 255, 255, 1);
        --gray-color: rgba(217, 217, 217, 1);
        --success-color: rgba(45, 192, 113, 1);
        --error-color: #f83b3b;
        --muted-color: rgba(189, 189, 189, 1);
        --disabled-element-color: rgba(142, 194, 242, 1);
        --border-color: #E6E6E6;
        --input-background-color: #F9F9F9;

        /* Font */
        --font: 'Montserrat', sans-serif;
        --text-color: rgba(37, 43, 66, 1);
        --second-text-color: rgba(115, 115, 115, 1);
        --text-light-color: rgba(255, 255, 255, 1);
        --text-dark-color: rgba(0, 0, 0, 1);

        --fs-xxxl: 58px;
        --fs-xxl: 40px;
        --fs-xl: 32px;
        --fs-lg: 24px;
        --fs-lg-sm: 20px;
        --fs-md: 16px;
        --fs-sm: 14px;
        --fs-xs: 12px;
        --fs-xxs: 11px;

        /* Borders and Radius */
        --radius: 5px;
        --radius-md: 10px;
        --radius-rounded: 37px;

        /* Others */
        --transition: 0.3s ease;
        --max-width: 1050px;
        --padding: 16px;
        --padding-content: 60px 16px;

    }

    /* Global Styles */
    html {
    scroll-behavior: smooth;
    }
    
    body {
        background-color: var(--light-background-color);
        font-family: var(--font);
        font-size: var(--fs-sm);
    }

`;