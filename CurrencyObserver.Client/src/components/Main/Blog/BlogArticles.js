import React from "react";

const BlogArticles = ({ article }) => {
  const isTitleLong = article.title.length > 30;
  const isDescriptionLong = article.description.length > 125;

  return (
    <div className="article-block swiper-slide">
      {/* Зображення */}
      <img
        id="image"
        src={article.img_url}
        alt={`Image for ${article.title}`}
      />
      <article>
        {/* Заголовок */}
        <h2 id="title" style={{ fontSize: isTitleLong ? "18px" : "inherit" }}>
          {article.title}
        </h2>
        {/* Опис */}
        <p id="description">
          {isDescriptionLong
            ? `${article.description.substring(0, 125)}... `
            : article.description}
          {isDescriptionLong && (
            <a
              id="readMoreBtn"
              className="hiddenBtn"
              href={article.article_url}
            >
              Read more
            </a>
          )}
        </p>
        {/* Дата */}
        <span className="date" id="date">
          {article.date}
        </span>
      </article>
    </div>
  );
};

export default BlogArticles;
