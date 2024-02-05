import { BiPlay, BiMessageAltDots  } from "react-icons/bi";
import { BsCircleSquare } from "react-icons/bs";
import { AboutUsContainer, AboutUsContent, AboutUsInfo, AboutUsText, AboutUsVideoImage, AboutUsVideoContainer, AboutUsVideoLink, AboutUsVideoButton, AboutUsInfoOurField, AboutUsOurFieldList, AboutUsOurFiledItemContent, AboutUsOurFieldListItem } from "../../../styled/pages/home/about-us-section";

const VIDEO_URL = 'https://www.youtube.com/watch?v=lNdOtlpmH5U&ab_channel=AliAbdaal';

export const AboutUsSection = () => {
  return (
    <AboutUsContainer>
        <AboutUsContent>
            <AboutUsText>
                <h2>About Us</h2>
                <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </AboutUsText>

            <AboutUsInfo>
                <AboutUsVideoContainer>
                    <AboutUsVideoLink href={VIDEO_URL} target="_blank">
                        <AboutUsVideoButton>
                            <BiPlay/>
                        </AboutUsVideoButton>
                    </AboutUsVideoLink>
                </AboutUsVideoContainer>

                <AboutUsInfoOurField>
                    <div className="text-container">
                        <h3>Most trusted in our field</h3>
                        <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
                    </div>
                
                    <AboutUsOurFieldList>
                        <AboutUsOurFieldListItem>
                            <BsCircleSquare/>
                            <AboutUsOurFiledItemContent>
                                <h4>the quick fox jumps over the lazy dog</h4>
                                <p>Things on a very small scale ...</p>
                            </AboutUsOurFiledItemContent>
                        </AboutUsOurFieldListItem>
                        
                        <AboutUsOurFieldListItem>
                            <BiMessageAltDots/>
                            <AboutUsOurFiledItemContent>
                                <h4>the quick fox jumps over the lazy dog</h4>
                                <p>Things on a very small scale ...</p>
                            </AboutUsOurFiledItemContent>
                        </AboutUsOurFieldListItem>
                    </AboutUsOurFieldList>
                </AboutUsInfoOurField>
            </AboutUsInfo>
        </AboutUsContent>
    </AboutUsContainer>
  );
};