import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import "./DetailPosts.style.css";

const DetailPosts = () => {
  const [dataDetail, setDataDetail] = useState([]);
  const { id } = useParams();
  const { state } = useLocation();
  const getDetail = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/${state}/${id}`
      );

      if (res.status == 200) {
        setDataDetail(res.data);
      }
      console.log(res.data);
      console.log(state);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  if (state == "posts" ) {
    return (
      <div className="detail">
        <h1>{dataDetail.title}</h1>
        <div className="body">
          <p>{dataDetail.body}</p>
        </div>
      </div>
    );
  } else if (state == "users") {
    return (
      <div className="detail">
        <h1>{dataDetail.name}</h1>
        <div className="body">
          <p>Phone :{dataDetail.phone}</p>
          <p>Email :{dataDetail.email}</p>
          <p>Username :{dataDetail.username}</p>
          <p>Website :{dataDetail.website}</p>
        </div>
      </div>
    );
  } else if (state == "comments")
  {
    return (
      <div className="detail">
        <h1>{dataDetail.name}</h1>
        <div className="body">
        <p>{dataDetail.body}</p>
        </div>
      </div>

    )
  }
};

export default DetailPosts;
