import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import theme from "config/theme";
import { store } from "store";
import { Web3Provider } from "state/web3";
import ThemeManager from "hooks/useDarkMode";

ReactDOM.render(
  <Provider store={store}>
    <ThemeManager>
      <Web3Provider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Web3Provider>
    </ThemeManager>
  </Provider>,
  document.querySelector("#root")
);
