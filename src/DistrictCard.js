import React, { Component } from 'react';
import {object, func} from 'prop-types'
require('./DistrictCard.css');
class DistrictCard extends Component {

  yearData() {
    const { distData } = this.props
    return  Object.keys(distData.data).map((year) => {
      let accentClass;
      if (distData.data[year] > 0.5) {
        accentClass = 'high'
      } else {
        accentClass = 'low'
      }
      return <p className="district-data" key={distData.location + year}> <span className="year">{year} :  </span> <span className={accentClass}>{distData.data[year]}</span></p>
    })
  }

  render() {
    const { distData, handleSelectCard, activeClass } = this.props
    return (
      <div className={activeClass} onClick={() => handleSelectCard(distData.location)}>
        <h1 className="district-location">{distData.location}</h1>
        <div className="yearData">
          {this.yearData()}
        </div>
      </div>
    )
  }
}

DistrictCard.propTypes = {
  distData: object,
  handleSelectCard: func
}

export default DistrictCard
