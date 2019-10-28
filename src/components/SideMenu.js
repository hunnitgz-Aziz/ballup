import React from "react";
import styled from "styled-components";
import heroBG from "../assets/hero-img.jpg";
import { bool } from "prop-types";

const Menu = styled.nav`
  background: linear-gradient(180deg, #e57747 0%, rgba(216, 106, 66, 1) 100%);
  height: 568px;
  width: 249px;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;

const Hero = styled.div`
  height: 279px;
  background-image: url(${heroBG});
`;

const NavContainer = styled.div``;

const NavLink = styled.a``;

const MenuLogo = styled.div``;

const SideMenu = ({ open }) => {
  return (
    <Menu open={open}>
      <Hero></Hero>
      <NavContainer>
        <NavLink></NavLink>
      </NavContainer>
      <MenuLogo></MenuLogo>
    </Menu>
  );
};

SideMenu.protoTypes = {
  open: bool.isRequired
};

export default SideMenu;
