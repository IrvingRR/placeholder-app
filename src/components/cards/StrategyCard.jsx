import { StrategyCardStyled } from "../../styled/components/cards/strategy-card";

export const StrategyCard = ({ icon, amount, text }) => {
  return (
      <StrategyCardStyled>
          { icon }
          <h3>{amount}</h3>
          <small>{text}</small>
      </StrategyCardStyled>
  );
};