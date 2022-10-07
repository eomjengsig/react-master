import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { darktheme, theme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
export let themeV = true;

const handleTheme = () => {
  if (themeV === true) {
    themeV = false;
    root.render(
      <QueryClientProvider client={queryClient}>
        <button onClick={handleTheme}>theme change</button>

        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    );
  } else if (themeV === false) {
    themeV = true;
    console.log(themeV);
    root.render(
      <QueryClientProvider client={queryClient}>
        <button onClick={handleTheme}>theme change</button>

        <ThemeProvider theme={darktheme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    );
  }
};

root.render(
  <QueryClientProvider client={queryClient}>
    <button onClick={handleTheme}>theme change</button>

    <ThemeProvider theme={darktheme}>
      <App />
    </ThemeProvider>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
