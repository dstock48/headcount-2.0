import React from 'react';

const ComparisonCard = ({comparisonData}) => {
  const titles = Object.keys(comparisonData)
  return (
    <div className="district-card">
    <h1>{titles[0]} VS. {titles[1]}</h1>
    <p>Compared: {comparisonData.compared}</p>

    </div>
  )
}

export default ComparisonCard
