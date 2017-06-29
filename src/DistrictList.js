import React from 'react';
import DistrictCard from './DistrictCard'
import {func, arrayOf, array, shape} from 'prop-types'
require('./DistrictList.css');

const DistrictList = ( { districts, handleSelectCard } ) => {
  const districtsArray = districts.map(district => <DistrictCard key={district.location} distData={district} handleSelectCard={handleSelectCard}/>);
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
