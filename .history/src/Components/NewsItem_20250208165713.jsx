// eslint-disable-next-line react/prop-types
const NewsItem = ({ title, description, url, imageUrl }) => {
  return (
    <div className="card news-card">
      <img 
        src={imageUrl || "https://via.placeholder.com/360x200"}  
        className="card-img-top news-image"  
        alt="News Image"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
