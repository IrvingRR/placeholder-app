import { useRef, useState } from "react";
import { AmountInvestmentContainer, AmountInvestmentContent, AmountInvestmentHeader, AmountInvestmentProfit, AmountInvestmentVideo } from "../../../styled/pages/home/amount-of-investments-section";
import AmountInvestmentsVideoBackground from "../../../assets/video/second-video-background.mp4";
import { Range } from "../../common";

export const AmountOfInvestmentsSection = () => {
    const videoRef = useRef();
    const sectionRef = useRef();
    const [profit, setProfit] = useState(0);
 
    window.addEventListener('mouseover', (e) => {
        if(e.target === sectionRef.current) {
            videoRef.current.play();
        }
    });

    return (
        <AmountInvestmentContainer>
            <AmountInvestmentVideo ref={videoRef} loop muted>
                <source src={AmountInvestmentsVideoBackground} type="video/mp4" />
            </AmountInvestmentVideo>
            <AmountInvestmentContent ref={sectionRef}>
                <AmountInvestmentHeader>Amount of investment</AmountInvestmentHeader>
                <Range initialValue={0} minValue={0} maxValue={250} setValue={setProfit}/>
                <AmountInvestmentProfit>
                    <h3>Profit</h3>
                    <h3>${profit}</h3>
                </AmountInvestmentProfit>
            </AmountInvestmentContent>
        </AmountInvestmentContainer>
    );
};