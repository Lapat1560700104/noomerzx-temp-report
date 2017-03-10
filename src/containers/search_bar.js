import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  onInputChange (term) {
    this.setState({term})
  }

  onFormSubmit (event) {
    event.preventDefault()

    this.props.fetchWeather(this.state.term)
    this.setState({term:''})
  }

  render () {
    return (
      <div className="col-sm-12 search-bar">
        <form className="input-group" onSubmit={event => this.onFormSubmit(event)}>
          <input className="form-control" 
                  placeholder="Type some province in Thailand..."
                  value={this.state.term}
                  onChange={event => this.onInputChange(event.target.value)}/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchWeather: fetchWeather}, dispatch)
}  

export default connect(null, mapDispatchToProps)(SearchBar)