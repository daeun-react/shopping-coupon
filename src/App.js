import Routes from "Routes";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "contexts/cart/CartContext";
import GlobalStyle from "styles/GlobalStyle";
import Theme from "styles/Theme";

function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
