import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Article from "./Article";
import { articles } from "./articles.js";
import registerServiceWorker from "./registerServiceWorker";

let data = articles[0];

ReactDOM.render(<Article art={data} />, document.getElementById("root"));
