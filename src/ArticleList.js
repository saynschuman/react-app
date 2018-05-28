import React from "react";
import Article from "./Article";

export default function ArticleList({ articles }) {
  const articleElements = articles.map(art => (
    <li>
      <Article article={art} />
    </li>
  ));
  return <ul>{articleElements}</ul>;
}
