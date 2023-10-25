import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SubscriptionList from "./components/SubscriptionList.jsx";
import Details from "./components/Details.jsx";
import AlreadySubsDetail from "./components/alreadySubsDetail.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App}></Route>
        <Route path="/list" Component={SubscriptionList}></Route>
        <Route path="/details/:id" Component={Details}></Route>
        <Route path="/mySubDetails/:id" Component={AlreadySubsDetail}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
