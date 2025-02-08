// eslint-disable-next-line react/prop-types
const NewsItem = ({ title, description, url, imageUrl }) => {
  return (
    <div className="card">
      <img 
        src={imageUrl || "https://via.placeholder.com/360x200?text=No+Image"} 
        alt="News" 
      />
      <div className="card-body">
        <h5 className="card-title">{title || "No Title Available"}</h5>
        <p className="card-text">{description || "No description available."}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
