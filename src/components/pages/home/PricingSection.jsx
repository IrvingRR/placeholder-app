import toast from "react-hot-toast";
import { PricingCards, PricingContainer, PricingContent, PricingText } from "../../../styled/pages/home/pricing-section";
import { PricingCard } from "../../cards/PricingCard";

const freeBenefits =[
  { id: 1, benefit: 'Unlimited product updates', checked: true },
  { id: 2, benefit: 'Unlimited product updates', checked: true },
  { id: 3, benefit: 'Unlimited product updates', checked: true },
  { id: 4, benefit: '1GB Cloud storage', checked: false },
  { id: 5, benefit: 'Email and community support', checked: false },
];

const standarBenefits =[
  { id: 1, benefit: 'Unlimited product updates', checked: true },
  { id: 2, benefit: 'Unlimited product updates', checked: true },
  { id: 3, benefit: 'Unlimited product updates', checked: true },
  { id: 4, benefit: '1GB Cloud storage', checked: true },
  { id: 5, benefit: 'Email and community support', checked: true },
];

export const PricingSection = () => {

  const tryForFree = () => toast.success('Try to free selected simulation...');

  const buyStandar = () => toast.success('Buy standard simulation...');

  return (
    <PricingContainer id="pricing">
      <PricingContent>
        <PricingText>
          <h2>Pricing</h2>
          <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
        </PricingText>
        
        <PricingCards>
          <PricingCard
            title='FREE'
            description='Organize across all apps by hand'
            priceData={{ amount: 0, symbol: '$', time: 'Per Month' }}
            benefits={freeBenefits}
            buttonLabel='Try for free'
            buttonFunction={tryForFree}
          />
          
          <PricingCard
            title='STANDARD'
            description='Organize across all apps by hand'
            priceData={{ amount: 19, symbol: '$', time: 'Per Month' }}
            benefits={standarBenefits}
            buttonLabel='Buy Now'
            buttonFunction={buyStandar}
          />
        </PricingCards>
      </PricingContent>
    </PricingContainer>
  );
};