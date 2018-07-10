import React from 'react'
import Select from 'react-select'

const FilterSelect = ({ articles, value, selectToState }) => {
  const options = articles.map(article => ({
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
