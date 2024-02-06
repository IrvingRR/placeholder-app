import { ContactContainer, ContactContent, ContactMap } from "../../../styled/pages/home/contact-section";
import ContactMapBackground from "../../../assets/images/map-background.png";
import { ContactForm } from "../../forms/ContactForm";

export const ContactSection = () => {
  return (
    <ContactContainer id="contact">
        <ContactMap src={ContactMapBackground} alt='Contact map background ubication'/>
        <ContactContent>
            <ContactForm/>
        </ContactContent>
    </ContactContainer>
  );
};