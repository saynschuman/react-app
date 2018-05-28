import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import ArticleList from "./ArticleList";
import { articles } from "./articles.js";

ReactDOM.render(
  <ArticleList articles={articles} />,
  document.getElementById("root")
);
