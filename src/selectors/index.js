import { createSelector } from 'reselect'

const filtersGetter = state => state.filter
const articlesGetter = state => state.articles
const commentsGetter = state => state.comments
const idGetter = props => props.id

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
  console.log(id)
  return comments[id]
})
