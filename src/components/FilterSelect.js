import React from 'react'
import Select from 'react-select'
import {mapToArr} from '../helpers/index'

const FilterSelect = ({ articles, value, selectToState }) => {
  const articlesArr = mapToArr(articles)
  const options = articlesArr.map(article => ({
    label: article.author,
    value: article.id,
  }))
  function handleChange(selected) {
      selectToState(selected)
  }
  return (
    <div>
      <Select value={value} options={options} isMulti onChange={handleChange} />
    </div>
  )
}

export default FilterSelect
