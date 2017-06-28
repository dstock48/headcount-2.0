import React, { Component } from 'react';
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

export default Controls
