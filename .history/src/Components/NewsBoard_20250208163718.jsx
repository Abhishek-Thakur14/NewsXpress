import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=776b22a1db104c6bbaec009b9a90f307`;
        let response = await fetch(url);
        let data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
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
