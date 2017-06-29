import React, { Component } from 'react';
import {func} from 'prop-types'
require('./Controls.css')

class Controls extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="controls">
        <input
          onChange={this.props.handleSearch}
          type="search"
          placeholder="Enter search location"
        />
      </div>
    )
  }

}

Controls.propTypes = {
  handleSearch: func,
}

export default Controls
