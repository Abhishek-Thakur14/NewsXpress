// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const NewsItem = ({ title, description, imageUrl, newsUrl }) => {
  // Default image if no image is available
  const defaultImage = "https://via.placeholder.com/400x250?text=No+Image+Available";

  return (
    <div className="card">
      <img src={imageUrl || defaultImage} alt="News" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description || "No description available."}</p>
        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
