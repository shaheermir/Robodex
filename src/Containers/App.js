import React, { Component } from 'react'
import 'tachyons'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import { apiCall } from '../api/api'
import { connect } from 'react-redux'
import { setSearchTerm } from '../actions'
import PropTypes from 'prop-types'

class App extends Component {
  constructor () {
    super()
    this.state = {
      robots: [],
      isPending: true
    }
  }

  componentDidMount () {
    apiCall('https://jsonplaceholder.typicode.com/users').then(data =>
      this.setState({ robots: data, isPending: false })
    )
  }

  render () {
    const { robots, isPending } = this.state
    const { searchTerm, onSearchChange } = this.props

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
      <div className='tc'>
        <h1>RoboDex</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          {isPending
            ? <h1>Loading...</h1>
            : <CardList robots={filteredRobots} />}
        </Scroll>
      </div>
    )
  }
}

App.propTypes = {
  searchTerm: PropTypes.string,
  onSearchChange: PropTypes.func
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchTerm(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
