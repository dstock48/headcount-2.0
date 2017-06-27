import React, { Component } from 'react';

const DistrictCard = ( {distData}) => {
  let yearData = Object.keys(distData.data).map((year) => {
    return <p className="district-data" key={Math.random()*year}>{year}: {distData.data[year]}</p>
  })
  return (
  <div className="district-card">
    <h1 className="district-location">{distData.location}</h1>
    {yearData}

  </div>
)}

export default DistrictCard
