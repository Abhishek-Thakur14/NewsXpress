import { useState } from "react";
import { useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=776b22a1db104c6bbaec009b9a90f307`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
    console.log(articles)
  },[]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
          </h2>
          {articles.map((news, index) => {
              return <NewsItem key={} title={news.title} description={news.description}  url={news.url} />
          })}
    </div>
  );
};

export default NewsBoard;
