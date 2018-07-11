import {normalizedArticles as articles} from '../normalizedArticles'
import {DELETE_ARTICLE} from "../constants";

export default function (articleState = articles, action) {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE: return articleState.filter(article => article.id !==payload.id)
        default: return articleState
    }
}