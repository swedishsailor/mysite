import { Link} from 'react-router-dom';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import styles from './PageNav.scss';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavLinks, NavMenu, NavItem } from './NavbarElements';



const PageNav = ({ toggle }) => (
    <>
        <Nav>
            <NavbarContainer>
        <NavLogo to='/'> Back </NavLogo>
        <MobileIcon onClick={toggle}>
            <FaBars />
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to ='games'> Games </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to ='pixelart'> PixelArt </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to ='contact'> Contact </NavLinks>
            </NavItem>
        </NavMenu>
        </NavbarContainer>
        </Nav>
    </>
);

export default PageNav;