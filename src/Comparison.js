import React from 'react';
import DistrictCard from './DistrictCard'
import ComparisonCard from './ComparisonCard'
import {object, arrayOf} from 'prop-types'
require('./Comparison.css');

const Comparison = ( { comparisonDistricts, comparisonData, handleSelectCard } ) => {
  const districtsArray = comparisonDistricts.map((district, i) => <DistrictCard key={district.location + i} activeClass="district-card active" distData={district} handleSelectCard={handleSelectCard}/>);
  if (comparisonDistricts.length < 2) {
    return (
      <div className="comparison">
        {districtsArray}
      </div>
    )
  }


  else {
    return (
      <div className="comparison">
        {districtsArray[0]}
        <ComparisonCard comparisonData={comparisonData} />
        {districtsArray[1]}
      </div>
    )}
};

Comparison.propTypes = {
  comparisonData: object,
  comparisonDistricts: arrayOf(object)
}

export default Comparison
