import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import theme from './styles/theme';
import ComicsList from './src/containers/comics-list';
import ComicsDetails from './src/containers/comics-detail';
import { Router, Scene } from 'react-native-router-flux';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="comicsList" component={ComicsList} title="XKCD" initial />
      <Scene key="comicsDetail" component={ComicsDetails} title="XKCD" />
    </Scene>
  </Router>
);

const MainWrapper = styled.View`
  flex: 1;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <Routes />
      </MainWrapper>
    </ThemeProvider>
  );
}
