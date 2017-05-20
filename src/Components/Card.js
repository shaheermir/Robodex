import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Card = ({ id, name, email }) => {
  return (
    <Link to={`/profile/${id}`}>
      <div className='bg-light-green dib pa3 ma2 tc br3 grow'>
        <img
          src={`//robohash.org/${id}?200x200`}
          alt='RoboImg'
          role='presentation'
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </Link>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string
}

export default Card
