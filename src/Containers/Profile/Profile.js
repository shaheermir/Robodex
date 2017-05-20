import './Profile.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { requestRobots } from '../../actions'

class Profile extends Component {
  componentDidMount () {
    this.props.onRequestRobots()
  }

  render () {
    const { robot, isPending } = this.props
    const robotData = (
      <div className='profile'>
        <div className='column headshot'>
          <div>
            <img alt={robot.name} src={`//robohash.org/${robot.id}?size=200x200`} />
          </div>
          <h2>{robot.name}</h2>
        </div>
        <div className='column address'>
          <h3>Address</h3>
          <p>
            {robot.address.street},&nbsp;
            {robot.address.suite}
          </p>
          <p>{robot.address.city}</p>
          <p>{robot.address.zipcode}</p>
          <a className='button' href={`mailto:${robot.email}`}>Email</a>
        </div>
      </div>
    )

    return (
      <div className='tc'>
        <h1>RoboDex</h1>
        <div className='profilePage'>
          {isPending || robot === undefined ? <p>no robot yet</p> : robotData}
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
  robot: PropTypes.object,
  isPending: PropTypes.bool.isRequired,
  onRequestRobots: PropTypes.func
}

const mapStateToProps = state => {
  let robotId = 1
  return {
    robot: state.robots.robots.find(robo => robo.id === robotId),
    isPending: state.robots.isPending
  }
}

const mapDispatchToProps = dispatch => ({
  onRequestRobots: () => dispatch(requestRobots)
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
