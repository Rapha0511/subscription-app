import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SubscriptionList from "./components/SubscriptionList.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App}></Route>
        <Route path="/list" Component={SubscriptionList}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
