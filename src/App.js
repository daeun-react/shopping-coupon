import Routes from "Routes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import Theme from "styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
