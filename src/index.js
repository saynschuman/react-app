import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Article from "./Article";
import { articles } from "./articles.js";
import Timer from "./Timer";

let data = articles[0];

ReactDOM.render(<Timer />, document.getElementById("root"));
