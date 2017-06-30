import React from 'react';
import ReactDOM from 'react-dom';
import Comparison from '../../src/Comparison';
import {mount, shallow} from 'enzyme'

describe('COMPARISON COMPONENT - ON LOAD', () => {

  it('Should display 1 DistrictCard if props has length 1', () => {
    const handleSelectCard = jest.fn();
    const dataSet = [{location: 'Colorado'}]
    const wrapper = shallow(
      <Comparison
        comparisonDistricts={dataSet}
        comparisonData={{}}
        handleSelectCard={handleSelectCard}
      />
    );

    expect(wrapper.find('DistrictCard').length).toEqual(1)
  });

  it('Should display both cards if props has length 2', () => {
    const handleSelectCard = jest.fn();
    const dataSet = [{location: 'Colorado'}, {location: 'New York'}]
    const wrapper = shallow(
      <Comparison
        comparisonDistricts={dataSet}
        comparisonData={{}}
        handleSelectCard={handleSelectCard}
      />
    );

    expect(wrapper.find('DistrictCard').length).toEqual(2)
  });

  it('Should display the comparison card if props has length 2', () => {
    const handleSelectCard = jest.fn();
    const dataSet = [{location: 'Colorado'}, {location: 'New York'}]
    const wrapper = shallow(
      <Comparison
        comparisonDistricts={dataSet}
        comparisonData={{}}
        handleSelectCard={handleSelectCard}
      />
    );

    expect(wrapper.find('ComparisonCard').length).toEqual(1)
  });

})
