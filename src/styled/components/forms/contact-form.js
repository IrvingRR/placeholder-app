import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    padding: var(--padding-content);
    background-color: var(--light-background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: var(--radius-md);
    gap: 30px;

    @media screen and (min-width: 768px){
        gap: 40px;   
    }
`;

export const FormTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    text-align: center;
    color: var(--text-color);

    h4 {
        font-size: var(--fs-xs);
    }

    h2 {
        font-size: var(--fs-lg);
    }

    @media screen and (min-width: 768px) {
        h4 {
            font-size: var(--fs-md);
        }

        h2 {
            font-size: var(--fs-xl);
        }
    }

`;

export const FormContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const FormFields = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    
    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
    }
`;