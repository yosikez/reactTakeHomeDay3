import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Posts.style.css";
import axios from "axios";

const Posts = ({ route, path }) => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const getData = async (route) => {
    try {
      const res = await axios.get(`${baseUrl}/${route}`);

      if (res.status) {
        setData(res.data);
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(route);
  }, [path]);

  const clickHandler = (id) => {
    navigate(`/${path}/${id}`, { state: route });
  };

  const Post = ({ data }) => {
    if (path == "article" ) {
      return (
        <p
          onClick={() => {
            clickHandler(data.id);
          }}
        >
          {data.title}
        </p>
      );
    } else if (path == "users" || path == "comments") {
      return (
        <p
          onClick={() => {
            clickHandler(data.id);
          }}
        >
          {data.name}
        </p>
      );
    }
  };

  return (
    <div className="posts">
      <h1>{path}</h1>
      <div className="posts-data">
        {data.map((data, key) => (
          <Post key={key} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
