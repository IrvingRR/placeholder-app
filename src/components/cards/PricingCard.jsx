import { FaCircleCheck } from "react-icons/fa6";
import { BenefitsItem, BenefitsList, PriceContainer, PriceInfo, PricingCardStyled } from "../../styled/components/cards/pricing-card";
import { Button } from "../common/Button";

export const PricingCard = ({ title, description, priceData, benefits=[], buttonLabel, buttonFunction }) => {
  return (
    <PricingCardStyled>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <PriceContainer>
            <h3>{priceData.amount}</h3>
            <PriceInfo>
                <small className="currency-symbol">{priceData.symbol}</small>
                <small className="currency-time">{priceData.time}</small>
            </PriceInfo>
        </PriceContainer>

        <BenefitsList>
            {benefits.length > 0 
                ? benefits.map(el => (
                    <BenefitsItem key={el.id} checked={el.checked}>
                        <FaCircleCheck/>
                        <p>{el.benefit}</p>
                    </BenefitsItem>
                ))

                :<BenefitsItem>No benefits</BenefitsItem>
            }
        </BenefitsList>

        <Button className='button-action' label={buttonLabel} onClick={buttonFunction} variant='outlined'/>
    </PricingCardStyled>
  );
};