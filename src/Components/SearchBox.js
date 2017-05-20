import React from 'react'
import 'tachyons'
import PropTypes from 'prop-types'

const SearchBox = props => {
  return (
    <div className='pa2'>
      <input
        type='text'
        className='pa2'
        placeholder='Search Robots...'
        onChange={props.onSearchChange}
      />
    </div>
  )
}

SearchBox.propTypes = {
  onSearchChange: PropTypes.func.isRequired
}

export default SearchBox
