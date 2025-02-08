import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewsItem from "./NewsItem";
import "./NewsBoard.css";

const NewsBoard = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const apiKey = "VITE_API_KEY=776b22a1db104c6bbaec009b9a90f307";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category || "general"}&apiKey=${apiKey}`;
        let response = await fetch(url);
        let data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="newsboard-container">
      <h2 className="text-center">
        {category ? category.toUpperCase() : "Latest"} <span className="badge bg-danger">News</span>
      </h2>
      <div className="row">
        {articles.map((news, index) => (
          <div className="col-md-4" key={index}>
            <NewsItem 
              title={news.title} 
              description={news.description}  
              url={news.url} 
              imageUrl={news.urlToImage} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
