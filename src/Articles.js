import React from "react";

const ArticleList = ({ data, query }) => {
  const highlightText = (text, query) => {
    if (!query.trim()) {
      return text;
    }
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
  };
  const filteredArticles = data.filter((article) => {
    const fullText = `${article.title} ${article.date} ${article.description}`;
    return fullText.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <div className="article-list">
    <p>
    <span className="bold">
    {filteredArticles.length} post &nbsp;
    </span>
      were found
    </p>
    {filteredArticles.map((article) => (
      <div className="article" key={article.id}>
        <h2 dangerouslySetInnerHTML={{ __html: highlightText(article.title, query) }} />
        <p className="date" dangerouslySetInnerHTML={{ __html: highlightText(article.date, query) }} />
        <p className="description" dangerouslySetInnerHTML={{ __html: highlightText(article.description, query) }} />
      </div>
    ))}
  </div>
  );
};

export default ArticleList;
