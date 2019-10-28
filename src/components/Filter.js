import React from "react";
import styled from "styled-components";
import filterIcon from "../assets/filter.svg";

const Button = styled.button`
  width: 34px;
  height: 34px;
  background-color: #ffffff;
  border-radius: 22px;
  box-shadow: 4px 5px 4px 1px rgba(61, 86, 108, 0.17);
  outline: 0;
  float: right;
`;

const Icon = styled.img`
  display: block;
  height: 24px;
  width: 24px;
`;

class Filter extends React.Component {
  render() {
    return (
      <Button>
        <Icon src={filterIcon} alt="Filter Options Button" />
      </Button>
    );
  }
}

export default Filter;
