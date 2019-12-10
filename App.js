import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import ComicsList from "./src/containers/comics-list/index";
const MainWrapper = styled.View`
  flex: 1;
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
