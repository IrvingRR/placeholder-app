import Slider from "react-slick";
import { SliderCard, SliderCardImage, SliderCardInfo, SliderContainer } from "../../styled/components/composite/clients-slider";
import ClientImage1 from "../../assets/images/customer-1.png";
import ClientImage2 from "../../assets/images/customer-2.png";
import ClientImage3 from "../../assets/images/customer-3.png";
import ClientImage4 from "../../assets/images/customer-4.png";
import ClientImage5 from "../../assets/images/customer-5.png";

const slides = [
  {
    id: 1,
    image: ClientImage1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    width: '350px',
    height: '500px'
  },

  {
    id: 2,
    image: ClientImage2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    width: '210px',
    height: '400px'
  },
  
  {
    id: 3,
    image: ClientImage3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    width: '210px',
    height: '300px'
  },

  {
    id: 4,
    image: ClientImage4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    width: '140px',
    height: '200px'
  },

  {
    id: 5,
    image: ClientImage5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    width: '70px',
    height: '180px'
  },
];

export const ClientsSlider = () => {
  const settings = {
    className: "center slider variable-width",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <SliderContainer className="slider-container">
      <Slider {...settings}>
        {
          slides.map(el => (
            <SliderCard className="client-card" key={el.id} width={el.width} height={el.height}>
              <SliderCardImage src={el.image}/>
              <SliderCardInfo className="slide-info">
                { el.text }
              </SliderCardInfo>
            </SliderCard>
          ))
        }
      </Slider>
    </SliderContainer>
  );
};