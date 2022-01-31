import React from "react";
import "./styles/styles.css";
import { FaComments } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Card = ({ image, views, likes, comments, downloads }) => {
  return (
    <div className="card">
      <img  className="img" src={image} alt="" height="550px" width="500px" />
      <div>
        <h5 className="icon">
          Views: {views} <FaRegEye size="2rem" />
        </h5>
        <h5 className="icon">
          Likes: {likes} <AiFillLike size="2rem" />
        </h5>

        <h5 className="icon">
          Comments :{comments} <FaComments size="2rem" />
        </h5>

        <h5 className="icon">
          Downloads: {downloads} <FiDownload size="2rem" />
        </h5>
      </div>
    </div>
  );
};

export default Card;
