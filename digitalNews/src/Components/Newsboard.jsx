import React from "react";
import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const Newsboard = ({ category }) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`;
        const response = await fetch(url);
        const data = await response.json();
        setArticle(data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge text-bg-danger">News</span>
      </h2>
      {article.map((news, index) => {
        return (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default Newsboard;
