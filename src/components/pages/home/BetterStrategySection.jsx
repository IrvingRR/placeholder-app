import { HiOutlineUsers } from "react-icons/hi";
import { BetterStrategyCards, BetterStrategyContainer, BetterStrategyContent, BetterStrategyText, BetterStrategyVideo } from "../../../styled/pages/home/better-strategy-section";
import BetterStrategyVideoBackground from "../../../assets/video/first-video-background.mp4";
import { StrategyCard } from "../../cards/StrategyCard";
import { useRef } from "react";

export const BetterStrategySection = () => {

    const videoRef = useRef();
    const sectionRef = useRef();

    window.addEventListener('mouseover', (e) => {
        if(e.target === sectionRef.current) {
            videoRef.current.play();
        }
    });

    return (
        <BetterStrategyContainer>
            <BetterStrategyVideo ref={videoRef} autoplay loop muted>
                <source src={BetterStrategyVideoBackground} type="video/mp4" />
            </BetterStrategyVideo>
            <BetterStrategyContent ref={sectionRef}>
                <BetterStrategyText>
                    <h2>Better Strategy With Quality Business</h2>
                    <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </BetterStrategyText>
            
                <BetterStrategyCards>
                    <StrategyCard icon={<HiOutlineUsers/>} amount='978 +' text='Projects Done'/>
                    <StrategyCard icon={<HiOutlineUsers/>} amount='181 +' text='Satisfied Customers'/>
                    <StrategyCard icon={<HiOutlineUsers/>} amount='0,98' text='Successful projects'/>
                    <StrategyCard icon={<HiOutlineUsers/>} amount='746 +' text='Cases'/>
                </BetterStrategyCards>
            </BetterStrategyContent>

        </BetterStrategyContainer>
    );
};