import React from 'react';
import App from '../../src/App';
import { shallow, mount } from 'enzyme'

// describe('APP COMPONENT TEST - ON LOAD', () => {
//   const wrapper = mount(<App/>)
//   it('districts section of state should be populated on page load', () => {
//     const stateKeys = Object.keys(wrapper.state().districts)
//     expect(stateKeys.length).toEqual(181)
//
//   });
//
//   it('Should display the full dataset on load', () => {
//     const cards = wrapper.find('.district-card')
//     expect(cards.length).toEqual(181)
//
//   });
//
//   it('By default, comparison states should be empty', () => {
//     const expectedStateCompare = []
//     const expectedStateAverage = {}
//     expect(wrapper.state().comparisonData).toEqual(expectedStateAverage)
//     expect(wrapper.state().comparisonDistricts).toEqual(expectedStateCompare)
//
//   });
//
//   it('clicking on a card should cause it to render again at the top of the page', () => {
//     const compareCards = wrapper.find('.comparison')
//     expect(compareCards.children('.district-card').length).toEqual(0)
//   });
//
// })

describe('APP COMPONENT TEST - ON CLICK OF CARD', () => {
  const wrapper = mount(<App/>)
  it('clicking on a card should update state', () => {
    const cardList = wrapper.find('.district-list')
    const card = cardList.childAt(0)
    const expectedState = [ { location: 'Colorado',
        data:
         { '2004': 0.24,
           '2005': 0.278,
           '2006': 0.337,
           '2007': 0.395,
           '2008': 0.536,
           '2009': 0.598,
           '2010': 0.64,
           '2011': 0.672,
           '2012': 0.695,
           '2013': 0.703,
           '2014': 0.741 } } ]
    card.simulate('click')

    expect(wrapper.state().comparisonDistricts).toEqual(expectedState)
  });

  it('clicking on a card should cause it to render again at the top of the page', () => {
    const cards = wrapper.find('.district-card')
    expect(cards.length).toEqual(182)
  });

  it('clicking on an already selected card should remove it from state', () => {
    const cardList = wrapper.find('.district-list')
    const cards = wrapper.find('.district-card')
    const card = cardList.childAt(0)
    card.simulate('click')
    expect(wrapper.state().comparisonDistricts).toEqual([])

  });

  it('clicking on an already selected card should remove it from the top of the page', () => {
    const cardList = wrapper.find('.district-list')
    const compareList = wrapper.find('.comparison')
    const card = cardList.childAt(0)
    card.simulate('click')
    let cards = wrapper.find('.district-card')
    expect(cards.length).toEqual(182)
    card.simulate('click')
    cards = wrapper.find('.district-card')
    expect(cards.length).toEqual(181)
  });

  it('clicking on 2 or more cards should update state', () => {
    const cardList = wrapper.find('.district-list')
    const compareList = wrapper.find('.comparison')
    const card1 = cardList.childAt(0)
    const card2 = cardList.childAt(1)
    card1.simulate('click')
    card2.simulate('click')
    expect(wrapper.state().comparisonDistricts.length).toEqual(2)
    expect(wrapper.state().comparisonData).not.toEqual({})

  });

  it('clicking on 2 or more cards should cause a comparison card to render', () => {
    const compareCard = wrapper.find('.comparison-card')
    expect(compareCard.length).toEqual(1)

  });

  it('selected cards should have the class of "active" ', () => {
    const selectedCard = wrapper.find('.active')
    expect(selectedCard.length).toEqual(4)

  });
})

describe('APP COMPONENT TEST - ON SEARCH', () => {
  const wrapper = mount(<App/>)
  it('Searching for a district should update state', () => {
    const searchBar = wrapper.find('input')
    searchBar.simulate('change', { target: { value: 'colorado' } });
    expect(wrapper.state().districts.length).toEqual(2)

  });

  it('Searching for a district should cause only the matching data cards to render', () => {
    let cards = wrapper.find('.district-card')
    expect(cards.length).toEqual(2)

  });

  it('If search field is empty all data should be rendered', () => {
    const searchBar = wrapper.find('input')
    searchBar.simulate('change', { target: { value: '' } });
    let cards = wrapper.find('.district-card')
    expect(cards.length).toEqual(181)

  });
})
