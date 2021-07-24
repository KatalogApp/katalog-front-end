import React from "react";
import listOfPosts from "./listOfPosts";
 
const PostCard = ({title, date, description, keywords, theme, creator  }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Date: {date}</p>
      <p>Description: {description}</p>
      <ul>
        <li>{keywords}</li>
      </ul>
      <p>theme: {theme}</p>
      <p>creator: {creator}</p>
    </div>
  );
};
 
export default PostCard;