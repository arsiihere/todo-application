import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import TodoConTextProvider from "./components/store/TodoContextProvider";
import todoContext from "./components/store/todo-context";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoConTextProvider value={todoContext}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodoConTextProvider>
  </React.StrictMode>
);

reportWebVitals();
