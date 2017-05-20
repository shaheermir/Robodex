import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'

const CardList = ({ robots }) => (
  <div>
    {robots.map(robot => (
      <Card
        key={robot.id}
        id={robot.id}
        name={robot.name}
        email={robot.email}
      />
    ))}
  </div>
)

CardList.propTypes = {
  robots: PropTypes.array.isRequired
}

export default CardList
