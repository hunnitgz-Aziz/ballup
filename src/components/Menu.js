import React from "react";
import styled from "styled-components";
import { bool, func } from "prop-types";

const Bun = styled.button`
  width: 34px;
  height: 34px;
  background-color: #ffffff;
  border-radius: 22px;
  box-shadow: 4px 5px 4px 1px rgba(61, 86, 108, 0.17);
  outline: 0;
  margin: 24px;
  border: none;
  transition: all ease-in-out 0.2s;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

const Patty = styled.span`
  width: 100%;
  height: 2px;
  border-radius: 60px;
  background: #6c7275;
  margin: 3px 0;
  display: block;
`;

const Menu = ({ open, setOpen }) => {
  return (
    <Bun open={open} onClick={() => setOpen(!open)}>
      <Patty></Patty>
      <Patty></Patty>
      <Patty></Patty>
    </Bun>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};

export default Menu;
