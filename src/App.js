import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'
import DistrictRepository from './helper'
import kinderData from '../data/kindergartners_in_full_day_program.js'
import DistrictList from './DistrictList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      districts: []
    }
  }

  componentWillMount() {
    const district = new DistrictRepository(kinderData)
    const newState = {districts: district.findAllMatches()}
    this.setState(newState)
  }

  render() {
    return (
      <DistrictList districts={this.state.districts}/>
    );
  }
}

export default App;
