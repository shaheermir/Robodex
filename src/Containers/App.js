import React, { Component } from 'react'
import 'tachyons'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import { apiCall } from '../api/api'

class App extends Component {
  constructor () {
    super()
    this.state = {
      robots: [],
      searchTerm: '',
      isPending: true
    }

    this.onSearchChange = this.onSearchChange.bind(this)
  }

  componentDidMount () {
    apiCall('https://jsonplaceholder.typicode.com/users').then(data =>
      this.setState({ robots: data, isPending: false })
    )
  }

  onSearchChange (e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render () {
    const { searchTerm, robots, isPending } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
      <div className='tc'>
        <h1>RoboDex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          {isPending
            ? <h1>Loading...</h1>
            : <CardList robots={filteredRobots} />}
        </Scroll>
      </div>
    )
  }
}

export default App
