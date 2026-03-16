import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CalculatorContextProvider from "./store/CalculatorContext";
import { ThemeContextProvider } from "./store/ThemeContext";
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./store/themeSlice";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CalculatorContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </CalculatorContextProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
