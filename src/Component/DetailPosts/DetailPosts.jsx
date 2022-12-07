import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./DetailPosts.style.css";

const DetailPosts = () => {
  const [dataDetail, setDataDetail] = useState([]);
  const { id } = useParams();

  const getDetail = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      if (res.status == 200) {
        setDataDetail(res.data);
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="detail">
      <h1>{dataDetail.title}</h1>
      <p>{dataDetail.body}</p>
    </div>
  );
};

export default DetailPosts;
