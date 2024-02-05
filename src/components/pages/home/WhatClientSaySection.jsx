import { WhatClientSayContainer, WhatClientSayContent, WhatClientSayText } from "../../../styled/pages/home/what-clients-say-section";
import { ClientsSlider } from "../../composite/ClientesSlider";

export const WhatClientSaySection = () => {

  return (
    <WhatClientSayContainer>
      <WhatClientSayContent>
        <WhatClientSayText>
          <h2>What Clients Say</h2>
          <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
        </WhatClientSayText>
      </WhatClientSayContent>
      <ClientsSlider/>
    </WhatClientSayContainer>
  );
};