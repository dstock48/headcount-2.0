import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'
import DistrictRepository from './helper'
import kinderData from '../data/kindergartners_in_full_day_program.js'
import DistrictList from './DistrictList'
import Controls from './Controls'

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

  handleSearch(e) {
    const district = new DistrictRepository(kinderData)

    if (e.target.value === '') {
      const newState = {districts: district.findAllMatches()}
      this.setState(newState)
      return
    }

    const newState = {districts: district.findAllMatches(e.target.value)}
    this.setState(newState)
  }



  render() {
    return (
      <div>
        <Controls handleSearch={(searchInput) => this.handleSearch(searchInput)} />
        <DistrictList districts={this.state.districts} />
      </div>
    );
  }
}

export default App;
