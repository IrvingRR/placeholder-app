import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoTwitter   } from "react-icons/bi";
import { FooterContainer, FooterContent, FooterCopyRight, FooterItem, FooterList, FooterSocialMedia, FooterSocialMediaList } from "../../../styled/pages/home/footer-section";

export const FooterSection = () => {
  return (
    <FooterContainer>
        <FooterContent>
            <FooterList>
                    <FooterItem>
                        <h3>Get In Touch</h3>
                        <p>the quick fox jumps over the lazy dog</p>
                        <FooterSocialMediaList>
                            <FooterSocialMedia>
                                <BiLogoFacebookCircle/>
                            </FooterSocialMedia>

                            <FooterSocialMedia>
                                <BiLogoInstagram/>
                            </FooterSocialMedia>

                            <FooterSocialMedia>
                                <BiLogoTwitter/>
                            </FooterSocialMedia>
                        </FooterSocialMediaList>
                    </FooterItem>

                    <FooterItem>
                        <h3>Company info</h3>
                        <a href="#about-us">About Us</a>
                        <a href="#">Carrier</a>
                        <a href="#">We are hiring</a>
                        <a href="#">Blog</a>
                    </FooterItem>

                    <FooterItem>
                        <h3>Features</h3>
                        <p>Business Marketing</p>
                        <p>User Analytic</p>
                        <p>Live Chat</p>
                        <p>Unlimited Support</p>
                    </FooterItem>

                    <FooterItem>
                        <h3>Resources</h3>
                        <p>IOS & Android</p>
                        <p>Watch a Demo</p>
                        <p>Customers</p>
                        <p>API</p>
                    </FooterItem>
            </FooterList>
        </FooterContent>
        <FooterCopyRight>
            Made With Love By Figmaland All Right Reserved
        </FooterCopyRight>
    </FooterContainer>
  );
};