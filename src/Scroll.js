import React from 'react'
import PropTypes from 'prop-types'

const Scroll = props => {
  const styles = {
    height: '80vh',
    overflowY: 'scroll',
    border: '1px solid black'
  }

  return (
    <div style={styles}>
      {props.children}
    </div>
  )
}

Scroll.propTypes = {
  children: PropTypes.object
}

export default Scroll
