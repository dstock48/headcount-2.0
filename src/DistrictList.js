import React from 'react';
import DistrictCard from './DistrictCard'
import {func, arrayOf, array, shape} from 'prop-types'
require('./DistrictList.css');

const DistrictList = ( { districts, handleSelectCard, comparisonDists } ) => {
  const compDistNames = comparisonDists.map(dists => dists.location)

  const districtsArray = districts.map(district => <DistrictCard key={district.location} activeClass={compDistNames.includes(district.location) ? 'district-card active' : 'district-card'} distData={district} handleSelectCard={handleSelectCard}/>);
  return (
    <div className="district-list">
      {districtsArray}
    </div>
  )
};

const district = shape({
  district: array
})

DistrictList.propTypes = {
  districts: arrayOf(district),
  handleSearch: func
}

export default DistrictList
