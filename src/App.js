import React, { Component } from 'react';
import './App.css';
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
    // console.log(location)

    const comparisonDistrictNames = this.state.comparisonDistricts.map(dist => dist.location)

    if (comparisonDistrictNames.includes(location)) {
      const comparisonArr = this.state.comparisonDistricts.filter(item => item.location !== location)
      this.setState({comparisonDistricts: comparisonArr})
      return
    }

    if (this.state.comparisonDistricts.length > 1) {
      const comparisonArr = [this.state.comparisonDistricts[this.state.comparisonDistricts.length-1], this.district.findByName(location)]
      const newState = {comparisonDistricts: comparisonArr}
      this.setState(newState)
    } else {
      const comparisonArr = [...this.state.comparisonDistricts, this.district.findByName(location)]
      const newState = {comparisonDistricts: comparisonArr}
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
