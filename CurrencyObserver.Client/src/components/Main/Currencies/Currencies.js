import React, { useState, useEffect } from "react";

const Currencies = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("./data/myArticles.json");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data); // Зберігаємо статті в стані
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="my-currencies-page" id="my-currencies-page">
    </section>
  );
};

export default Currencies;
