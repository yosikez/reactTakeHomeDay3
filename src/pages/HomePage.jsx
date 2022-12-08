import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Posts from "../Component/Posts/Posts";

const Home = () => {
  const { pathname } = useLocation();

  if (pathname == "/users") {
    return <Posts route={"users"} path={"users"} />;
  } else if (pathname == "/article") {
    return <Posts route={"posts"} path={"article"} />;
  } else if (pathname == "/comments") {
    return <Posts route={"comments"} path={"comments"} />;
  } else {
    return <Outlet />;
  }
};

export default Home;
