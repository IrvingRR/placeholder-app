import ManHeroImage from '../../../assets/images/hero-man-image.png';
import { HeroActions, HeroContainer, HeroContent, HeroManImage, HeroTextInfo } from '../../../styled/pages/home/hero-section';
import { Button } from '../../common';

export const HeroSection = () => {
  return (
    <HeroContainer id="home">
        <HeroContent>
            {/* Content Text */}
                <HeroTextInfo>
                    <h1>Your Financial Assistant</h1>
                    <h3>We know how large objects will act, but things on a small scale.</h3>
                    <HeroActions>
                        <Button label='Get Quote Now' rounded variant='outlined-light'/>
                        <Button label='Learn More' rounded variant='outlined-light'/>
                    </HeroActions>
                </HeroTextInfo>
            {/* Man Image */}
                <HeroManImage src={ManHeroImage} alt='Hero man image'/>
        </HeroContent>
    </HeroContainer>
  );
};