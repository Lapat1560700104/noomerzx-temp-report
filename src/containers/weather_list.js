import React from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'

class WeatherList extends React.Component {

  renderList () {
    return this.props.weather.map((data) => {
      const name = data.city.name
      const temps = data.list.map(weather => weather.main.temp)
      const pressure = data.list.map(weather => weather.main.pressure)
      const humidity = data.list.map(weather => weather.main.humidity)

      return (
        <tr key={data.city.name} >
          <td>{name}</td>
          <td>
            <Chart data={temps} color="orange" />
          </td>
          <td>
            <Chart data={pressure} color="green" />
          </td>
          <td>
            <Chart data={humidity} color="blue" />
          </td>
        </tr>
      )
    })
  }

  render () {
    return (
      <div className="col-sm-12">
        <table className="table">
          <thead>
            <tr>
              <th width="25%">City</th>
              <th className="text-center" width="25%">Temperature</th>
              <th className="text-center" width="25%">Pressure</th>
              <th className="text-center" width="25%">Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps ({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)