import { IconButtonStyled } from "../../styled/components/common/icon-button";

export const IconButton = ({ icon, ...props }) => {
  return (
    <IconButtonStyled { ...props }>
        { icon }
    </IconButtonStyled>
  );
};