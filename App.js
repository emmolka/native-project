import React from "react";
import { styled, ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const MainWrapper = styled.View`
  flex: 1;
  background-color: "blue";
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <ComicsList />
      </MainWrapper>
    </ThemeProvider>
  );
}
