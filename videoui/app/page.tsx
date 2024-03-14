"use client";

import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { darkTheme, lightTheme } from "@/util/Theme";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import SignIn from "./(signin)/signin/page";
import Video from "./(video)/video/page";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Wrapper>
            <Navbar />
            
            <SignIn />
            <Video />
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}
