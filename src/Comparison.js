import React, { Component } from 'react';
import DistrictCard from './DistrictCard'
import PropTypes, {array, shape, arrayOf} from 'prop-types'
require('./Comparison.css');

const Comparison = ( { comparisonDistricts } ) => {
  const districtsArray = comparisonDistricts.map((district, i) => <DistrictCard key={district.location + i} distData={district}/>);
  return (
    <div className="comparison">
      {districtsArray}
    </div>
  )
};


export default Comparison
