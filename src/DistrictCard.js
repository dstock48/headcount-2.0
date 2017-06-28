import React, { Component } from 'react';

const DistrictCard = ( {distData}) => {
  let yearData = Object.keys(distData.data).map((year) => {
    let accentClass;
    if (distData.data[year] > 0.5) {
      accentClass = 'high'
    } else {
      accentClass = 'low'
    }
    return <p className="district-data" key={Math.random()*year}><span className="year">{year}:</span> <span className={accentClass}>{distData.data[year]}</span></p>
  })
  return (
  <div className="district-card">
    <h1 className="district-location">{distData.location}</h1>
    <div className="yearData">
      {yearData}
    </div>

  </div>
)}

export default DistrictCard