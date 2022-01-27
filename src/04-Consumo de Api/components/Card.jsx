import React from "react";


const Card = ({ image, views, likes, comments, downloads }) => {
  return (
    <div>
       
      <img src={image} alt="" height="300px" width="300px" />
      <h5>views: {views} </h5>
      <h5>likes: {likes}</h5>
      <h5>comments: {comments}</h5>
      <h5>downloads: {downloads}</h5>


    </div>
  );
};

export default Card;
