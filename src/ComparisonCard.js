import React from 'react';
import {object} from 'prop-types'

const ComparisonCard = ({ comparisonData }) => {
  const titles = Object.keys(comparisonData)
  return (
    <div className="district-card" >
      <h1>{titles[0]} VS. {titles[1]}</h1>
      <p>Compared: {comparisonData.compared}</p>

    </div>
  )
}

ComparisonCard.propTypes = {
  comparisonData: object
}

export default ComparisonCard
