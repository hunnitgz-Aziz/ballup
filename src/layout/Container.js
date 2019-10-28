import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  background: #fff;
  border-radius: 20px;
  height: 568px;
  width: 320px;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 10px 12px 45px 0px rgba(0, 0, 0, 0.1);
`;

class Container extends React.Component {
  render() {
    return <Frame></Frame>;
  }
}

export default Container;
