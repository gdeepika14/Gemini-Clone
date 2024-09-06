import "./index.css";
import App from "./App.jsx";
import ContextProvider from "./context/context.jsx";
import React from "react";
import ReactDOM from "react-dom/client";

// eslint-disable-next-line no-unused-vars



// eslint-disable-next-line no-unused-vars



ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
  <App />
  </ContextProvider>,
)
