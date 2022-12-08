import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Posts from "./Component/Posts/Posts";
import DetailPosts from "./Component/DetailPosts/DetailPosts";
import NavBar from "./Component/Navbar/Navbar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Posts />} />
          <Route path="article/" element={<Posts />} />
          <Route path="article/:id/" element={<DetailPosts />} />
          <Route path="users/" element={<Posts />} />
          <Route path="comments/" element={<Posts />} />
          <Route path="comments/:id" element={<DetailPosts />} />
          <Route path="users/:id/" element={<DetailPosts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
