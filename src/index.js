import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import ArticleList from "./components/ArticleList";
import { articles } from "./articles.js";

ReactDOM.render(
  <ArticleList articles={articles} />,
  document.getElementById("root")
);
