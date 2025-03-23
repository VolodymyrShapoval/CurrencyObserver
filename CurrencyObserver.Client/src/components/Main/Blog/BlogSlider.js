import React from "react";
import BlogArticles from "./BlogArticles";

const BlogSlider = ({ articles }) => (
  <div className="slider">
    <div className="card-wrapper">
      <div className="articles" id="articles">
        {articles.map((article, index) => (
          <div key={index} className="card">
            <BlogArticles article={article} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BlogSlider;
