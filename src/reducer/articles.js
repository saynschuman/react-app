import {articles as defaultArticles} from './articles'

export default (articleState = defaultArticles, action) {
    const {type} = action

    switch (type) {
        case 'DELETE_ARTICLE': return articleState
    }
    return articleState
}