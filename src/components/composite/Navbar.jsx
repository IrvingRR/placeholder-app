import { BiMenuAltLeft } from "react-icons/bi";
import { Link, LinkItem, LinksList, Logo, NavbarContainer, NavbarContent } from "../../styled/components/composite/navbar";
import { IconButton } from "../common";
import { useRef, useState } from "react";

export const Navbar = () => {
    const [linksVisible, setLinksVisible] = useState(false);
    
    return (
        <NavbarContainer>
            <NavbarContent>
                <Logo>PlaceHolder</Logo>
                <IconButton icon={<BiMenuAltLeft/>} variant='outlined-light' onClick={() => setLinksVisible(!linksVisible)}/>
                <LinksList visible={linksVisible}>
                    <Link href="#hero">Home</Link>
                    <Link href="#about-us">About Us</Link>
                    <Link href="#pricing">Pricing</Link>
                    <Link href="#contact">Contact</Link>
                </LinksList>
            </NavbarContent>
        </NavbarContainer>
    );
};