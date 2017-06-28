import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'
import DistrictRepository from './helper'
import kinderData from '../data/kindergartners_in_full_day_program.js'
import DistrictList from './DistrictList'
import Controls from './Controls'
import Comparison from './Comparison'

class App extends Component {
  constructor() {
    super()
    this.state = {
      districts: [],
      comparisonDistricts: []
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

  handleSelectCard(location) {
    const district = new DistrictRepository(kinderData)
    const comparisonArr = [...this.state.comparisonDistricts, district.findByName(location)]
    const newState = {comparisonDistricts: comparisonArr.splice(comparisonArr.length - 2)}
    this.setState(newState)
  }


  render() {
    return (
      <div>
        <Comparison comparisonDistricts={this.state.comparisonDistricts} />
        <Controls handleSearch={(searchInput) => this.handleSearch(searchInput)} />
        <DistrictList districts={this.state.districts} handleSelectCard={(location) => this.handleSelectCard(location)}/>
      </div>
    );
  }
}

export default App;
