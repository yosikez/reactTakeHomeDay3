import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Posts.style.css";
import axios from "axios";

const Posts = () => {
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await axios.get(baseUrl);

      if (res.status) {
        setData(res.data);
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const Post = ({ data }) => {
    return (
      <div className="posts-data">
        <p
          onClick={() => {
            navigate(`/article/${data.id}`);
          }}
        >
          {data.title}
        </p>
      </div>
    );
  };

  return (
    <div className="posts">
      <h1>POST</h1>
      {data.map((data, key) => (
        <Post key={key} data={data} />
      ))}
    </div>
  );
};

export default Posts;
