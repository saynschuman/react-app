import { createSelector } from 'reselect'

const filtersGetter = state => state.filter
const articlesGetter = state => state.articles

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filter) => {
  const { selected, from, to } = filter
  console.log('update')

  return articles.filter(article => {
    const published = Date.parse(article.date)
    const selectedId = selected.map(item => item.value)
    return (
      (!selectedId.length || selectedId.includes(article.id)) &&
      (!from || !to || (from <= published && published <= to))
    )
  })
})


