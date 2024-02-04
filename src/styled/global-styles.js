import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* Variables */

    :root {
        /* Colors */
        --light-background-color: rgba(255, 255, 255, 1);
        --primary-color: rgba(35, 166, 240, 1);
        --primary-gradient-color: rgba(24, 76, 154, 0.75);
        --black-gradient-color: rgba(45, 45, 45, 0.5);
        --white-color: rgba(255, 255, 255, 1);
        --gray-color: rgba(217, 217, 217, 1);
        --success-color: rgba(115, 115, 115, 1);
        --muted-color: rgba(115, 115, 115, 1);

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
        --fs-md: 16px;
        --fs-sm: 14px;
        --fs-xs: 12px;

        /* Borders and Radius */
        --radius: 5px;
        --radius-md: 10px;
        --radius-rounded: 37px;

        /* Others */
        --transition: 0.2s ease;

        /* Global Styles */
        body {
            background-color: var(--light-background-color);
            font-family: var(--font);
            font-size: var(--fs-sm);
        }

    }
`;