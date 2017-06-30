import React from 'react';
import ReactDOM from 'react-dom';
import DistrictCard from '../../src/DistrictCard';
import {mount, shallow} from 'enzyme'

describe('DISTRICT CARD COMPONENT TEST - ALL', () => {
  it('should render a card', () => {
    const wrapper = shallow(
      <DistrictCard
        key="0"
        activeClass="district-card"
        distData={{location:'Colorado', data: {}}}
        handleSelectCard={() => console.log()}
      />
    )
    expect(wrapper.find('.district-card').length).toEqual(1);
  });

  it('should have a header with the location it represents', () => {
    const wrapper = shallow(
      <DistrictCard
        key="0"
        activeClass="district-card"
        distData={{location:'Colorado', data: {}}}
        handleSelectCard={() => console.log()}
      />
    );

    expect(wrapper.find('.district-location').length).toEqual(1)
  });

  it('should display the rest of the data', () => {
    const wrapper = mount(
      <DistrictCard
        key="0"
        activeClass="district-card"
        distData={{location:'Colorado', data: {'2004':'1', '2005':'0.4'}}}
        handleSelectCard={() => console.log()}
      />
    );

    expect(wrapper.find('.year').length).toEqual(2)
  });

  it('should call handleSelectCard on click', () => {
    const handleSelectCard = jest.fn()
    const wrapper = mount(
      <DistrictCard
        key="0"
        activeClass="district-card"
        distData={{location:'Colorado', data: {'2004':'1', '2005':'0.4'}}}
        handleSelectCard={handleSelectCard}
      />
    );
    wrapper.find('.district-card').simulate('click')
    expect(handleSelectCard).toBeCalled()

  });

  it('displayed data should have a different class depending on the value', () => {
    const wrapper = mount(
      <DistrictCard
        key="0"
        activeClass="district-card"
        distData={{location:'Colorado', data: {'2004':'1', '2005':'0.4', '2006':'.8', '2007':'.65'}}}
        handleSelectCard={() => console.log()}
      />
    );

    expect(wrapper.find('.low').length).toEqual(1)
    expect(wrapper.find('.high').length).toEqual(3)

  });

})
