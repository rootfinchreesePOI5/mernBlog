import React, { useEffect, useState } from "react";

function Recent() {
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Key = "d182a76173324ba5bc28fde3d7ca16cb";
  const url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${Key}`;

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new error(`http error status: ${response.status}`);
        }
        const data = await response.json();
        setRecent(data.articles);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecent();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    <div>Error fetching the news....</div>;
  }
  return (
    <div className="recent-container">
      <div className="title">
        <h1>Recent-News</h1>
      </div>
      {recent.map((item, index) => {
        return (
          <div key={index} className="news-container">
            <img src={item.urlToImage} alt="" />
            <div className="text">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <h5>{item.author}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Recent;
