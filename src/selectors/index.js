import { createSelector } from 'reselect'

const filtersGetter = state => state.filter
const articlesGetter = state => Object.keys(state.articles).map(objectId => state.articles[objectId])
const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id

export const filtratedArticlesSelector = createSelector(
  articlesGetter,
  filtersGetter,
  (articles, filter) => {
    const { selected, from, to } = filter

    return articles.filter(article => {
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
