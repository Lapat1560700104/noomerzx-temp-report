import React from 'react'
import AppHeader from './components/app_header'
import SearchBar from './containers/search_bar'
import WeatherList from './containers/weather_list'

class App extends React.Component {
  render () {
    return (
      <div>
        <AppHeader />
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}

export default App