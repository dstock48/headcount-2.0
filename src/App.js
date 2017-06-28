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
      comparisonDistricts: [],
      compareDistrictAverages: {}
    }
    this.district = new DistrictRepository(kinderData)
  }

  componentWillMount() {
    const newState = {districts: this.district.findAllMatches()}
    this.setState(newState)
  }

  compareDistricts(dist1, dist2) {
    return this.district.compareDistrictAverages(dist1, dist2)
  }

  handleSearch(e) {

    if (e.target.value === '') {
      const newState = {districts: this.district.findAllMatches()}
      this.setState(newState)
      return
    }

    const newState = {districts: this.district.findAllMatches(e.target.value)}
    this.setState(newState)
  }

  handleSelectCard(location) {
    for (let i = 0; i < this.state.comparisonDistricts.length; i++) {
      if (this.state.comparisonDistricts[i].location === location) {
        const newState = {comparisonDistricts: this.state.comparisonDistricts.filter(item => item.location !== location)}
        this.setState(newState)
        return
      }

    }
    const comparisonArr = [...this.state.comparisonDistricts, this.district.findByName(location)]
    const usableComparisonArr = Array.from(comparisonArr)
    console.log(location)
    if (comparisonArr.length > 1) {
      const newState = {comparisonDistricts: comparisonArr.splice(comparisonArr.length - 2), compareDistrictAverages: this.compareDistricts(usableComparisonArr[usableComparisonArr.length-1], usableComparisonArr[usableComparisonArr.length-2]) }
      this.setState(newState)
    }
    else {
      const newState = {comparisonDistricts: comparisonArr.splice(comparisonArr.length - 2)}
      this.setState(newState)
    }
  }


  render() {
    return (
      <div>
        <Comparison comparisonDistricts={this.state.comparisonDistricts} compareDistrictAverages={(dist1, dist2) => this.compareDistrictAverages(dist1, dist2)}/>
        <Controls handleSearch={(searchInput) => this.handleSearch(searchInput)} />
        <DistrictList districts={this.state.districts} handleSelectCard={(location) => this.handleSelectCard(location)}/>
      </div>
    );
  }
}

export default App;
