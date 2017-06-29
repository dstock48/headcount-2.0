import React from 'react';
import DistrictCard from './DistrictCard'
// import PropTypes, {array, shape, arrayOf} from 'prop-types'
require('./DistrictList.css');

const DistrictList = ( { districts, handleSelectCard } ) => {
  const districtsArray = districts.map(district => <DistrictCard key={district.location} distData={district} handleSelectCard={handleSelectCard}/>);
  return (
    <div className="district-list">
      {districtsArray}
    </div>
  )
};

// const district = shape({
//   district: array
// })
//
// DistrictList.propTypes = {
//   districts: arrayOf(district)
// }

export default DistrictList
