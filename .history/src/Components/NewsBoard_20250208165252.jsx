import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import "./NewsBoard.css"; // Ensure this file exists for styling

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_NEW_API_KEY`;
        let response = await fetch(url);
        let data = await response.json();

        if (data.articles) {
          setArticles(data.articles);
        } else {
          setError("No news available.");
        }
      } catch (err) {
        setError("Failed to load news. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h2 className="text-center text-light my-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {loading ? (
        <p className="text-center text-light">Loading news...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : (
        <div className="news-grid">
          {articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              url={news.url}
              imageUrl={news.urlToImage}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
