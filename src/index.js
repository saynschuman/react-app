import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
// import UserForm from "./components/UserForm";
import ArticleList from "./components/ArticleList";
// import Calendar from "./components/Calendar";
import { articles } from "./articles.js";

ReactDOM.render(
  <ArticleList articles={articles} />,
  document.getElementById("root")
);

// ReactDOM.render(<Calendar />, document.getElementById("root"));

// ReactDOM.render(<App />, document.getElementById("root"));
