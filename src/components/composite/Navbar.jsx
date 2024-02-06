import { BiMenuAltLeft } from "react-icons/bi";
import { Link, LinkItem, LinksList, Logo, NavbarContainer, NavbarContent } from "../../styled/components/composite/navbar";
import { IconButton } from "../common";
import { useRef, useState } from "react";

const links = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [linksVisible, setLinksVisible] = useState(false);
    
    return (
        <NavbarContainer>
            <NavbarContent>
                <Logo>PlaceHolder</Logo>
                <IconButton icon={<BiMenuAltLeft/>} variant='outlined-light' onClick={() => setLinksVisible(!linksVisible)}/>
                <LinksList visible={linksVisible}>
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setLinksVisible(false)}>
                            {link.label}
                        </Link>
                    ))}
                </LinksList>
            </NavbarContent>
        </NavbarContainer>
    );
};