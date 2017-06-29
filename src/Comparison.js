import React from 'react';
import DistrictCard from './DistrictCard'
// import PropTypes, {array, shape, arrayOf} from 'prop-types'
import ComparisonCard from './ComparisonCard'
require('./Comparison.css');

const Comparison = ( { comparisonDistricts, comparisonData } ) => {
  const districtsArray = comparisonDistricts.map((district, i) => <DistrictCard key={district.location + i} distData={district}/>);
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
        <ComparisonCard comparisonData={comparisonData}/>
        {districtsArray[1]}
      </div>
    )}



};


export default Comparison
