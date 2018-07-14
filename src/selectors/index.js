import { createSelector } from 'reselect'

const filtersGetter = state => state.filter
const articlesGetter = state => state.articles
const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id

export const filtratedArticlesSelector = createSelector(
  articlesGetter,
  filtersGetter,
  (articles, filter) => {
    const { selected, from, to } = filter

    const newArticles = Object.keys(articles).map(objectId => articles[objectId])

    return newArticles.filter(article => {
      const published = Date.parse(article.date)
      const selectedId = selected.map(item => item.value)
      return (
        (!selectedId.length || selectedId.includes(article.id)) &&
        (!from || !to || (from <= published && published <= to))
      )
    })
  },
)

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
  return comments[id]
})
