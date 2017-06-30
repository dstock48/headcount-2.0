import React from 'react';
import ReactDOM from 'react-dom';
import Comparison from '../../src/Comparison';
import ComparisonCard from '../../src/ComparisonCard';
import {mount, shallow} from 'enzyme'

describe('COMPARISON CARD COMPONENT TEST - ALL', () => {

  it('Should render in the containing element at the top of the page', () => {
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

  it('Should contain the names of the two datasets being compared', () => {
    const comparisonData = {
      'Colorado': 0.88,
      'New York': 0.92,
      'compared': (0.88 / 0.92)
    }
    const wrapper = mount(<ComparisonCard comparisonData={comparisonData}/>)

    expect(wrapper.find('#location-1').text()).toEqual('◀︎ New York')
    expect(wrapper.find('#location-2').text()).toEqual('Colorado ▶︎')
  });

  it('Should display a value that is the result of the comparison', () => {
    const comparisonData = {
      'Colorado': 0.88,
      'New York': 0.92,
      'compared': (0.88 / 0.92)
    }
    const wrapper = mount(<ComparisonCard comparisonData={comparisonData}/>)

    // console.log(wrapper.debug());
    // console.log(wrapper.find('#compared').text());
    expect(wrapper.find('#compared').text()).toEqual(`Compared: ${comparisonData.compared}`)
  });
})
