import React from 'react';
import {object} from 'prop-types'
require('./ComparisonCard.css')

const ComparisonCard = ({ comparisonData }) => {
  const titles = Object.keys(comparisonData)
  return (
    <div className="comparison-card" >
      <div>
        <h1 id="location-1">◀︎ {titles[1]}</h1>
        <h2>AVG: {comparisonData[titles[1]]}</h2>
      </div>
      <p id="compared">Compared: {comparisonData.compared}</p>
      <div>
        <h1 id="location-2">{titles[0]} ▶︎</h1>
        <h2>AVG: {comparisonData[titles[0]]}</h2>
      </div>
    </div>
  )
}

ComparisonCard.propTypes = {
  comparisonData: object
}

export default ComparisonCard
