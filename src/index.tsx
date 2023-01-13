import ReactDOM from "react-dom/client";

import { HashRouter } from "react-router-dom"; // hash for proper workin on github pages
import { Provider } from "react-redux";
import { store } from "./store/store";

import App from "./App";

import { StyledEngineProvider } from "@mui/material";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Provider>
  </HashRouter>
);
