import { ButtonStyled } from "../../styled/components/common/button";

export const Button = ({ label, ...props }) => {
  return (
    <ButtonStyled { ...props }>
        { label }
    </ButtonStyled>
  );
};