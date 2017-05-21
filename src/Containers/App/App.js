import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardList from '../../Components/CardList'
import SearchBox from '../../Components/SearchBox'
import Scroll from '../../Components/Scroll'
import { connect } from 'react-redux'
import { setSearchTerm, requestRobots } from '../../actions'

class App extends Component {
  componentWillMount () {
    if (this.props.robots.length === 0) {
      this.props.onRequestRobots()
    } else {
      console.log('Robots are already loaded.')
    }
  }

  render () {
    const { searchTerm, onSearchChange, robots, isPending } = this.props

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
      <div className='tc'>
        <h1>RoboDex</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          {isPending ? <h1>Loading...</h1> : <CardList robots={filteredRobots} />}
        </Scroll>
      </div>
    )
  }
}

App.propTypes = {
  searchTerm: PropTypes.string,
  onSearchChange: PropTypes.func,
  robots: PropTypes.array,
  isPending: PropTypes.bool,
  error: PropTypes.any,
  onRequestRobots: PropTypes.func
}

const mapStateToProps = state => ({
  searchTerm: state.search.searchTerm,
  robots: state.robots.robots,
  error: state.robots.error,
  isPending: state.robots.isPending
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchTerm(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
