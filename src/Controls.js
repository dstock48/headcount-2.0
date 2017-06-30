import React, { Component } from 'react';
import {func} from 'prop-types'
require('./Controls.css')

class Controls extends Component {

  render() {
    return (
      <div className="controls">
        <h1 className="logo">HeadCount 2.0</h1>
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
