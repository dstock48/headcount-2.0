import React from 'react';
import ReactDOM from 'react-dom';
import DistrictList from '../../src/DistrictList';
import {mount, shallow} from 'enzyme'

describe('DISTRICTLIST COMPONENT TEST - ALL', () => {
  it('renders a container for the data cards', () => {
    const handleSelectCard = jest.fn();
    const wrapper = shallow(
      <DistrictList
        comparisonDists={[]}
        districts={[]}
        handleSelectCard={handleSelectCard}
      />
    );

    expect(wrapper.find('.district-list').length).toEqual(1)
  });

  it('Should render a card for every item in the dataset', () => {
    const handleSelectCard = jest.fn();
    const dataSet = [{location: 'Colorado'}, {location: 'New York'}]
    const wrapper = shallow(
      <DistrictList
        comparisonDists={dataSet}
        districts={dataSet}
        handleSelectCard={handleSelectCard}
      />
    );

    expect(wrapper.find('DistrictCard').length).toEqual(dataSet.length)
  });

  it('Should give a card active class if they are currently selected', () => {
    const handleSelectCard = jest.fn();
    const dataSet = [{location: 'Colorado'}]
    const wrapper = shallow(
      <DistrictList
        comparisonDists={dataSet}
        districts={dataSet}
        handleSelectCard={handleSelectCard}
      />
    );

    expect(wrapper.find('DistrictCard').props().activeClass).toEqual('district-card active')
  });

})
