import React, { useState } from "react";
import styled from "styled-components";
import Map from "./components/Map";
import Menu from "./components/Menu";
import SideMenu from "./components/SideMenu";

const Body = styled.div`
  background: #fff6f0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: relative;
`;

const Frame = styled.div`
  background: #fff;
  border-radius: 20px;
  height: 568px;
  width: 320px;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 10px 12px 45px 0px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001;
`;

const Container = styled.div``;

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Body>
      <Frame>
        <SideMenu open={open} setOpen={setOpen} />
        <Container open={open} setOpen={setOpen}>
          <Header>
            <Menu open={open} setOpen={setOpen} />
          </Header>
          <Map></Map>
        </Container>
      </Frame>
    </Body>
  );
}

export default App;
