import React from 'react';
import ReactDOM from 'react-dom';
import Controls from '../../src/Controls';
import {mount, shallow} from 'enzyme'

describe('CONTROLS COMPONENT TEST - ALL', () => {

  it('Should render a search input', () => {
    const wrapper = shallow(<Controls />)
    expect(wrapper.find('input').props().type).toEqual('search')

  });

  it('Should run a function when input is typed into', () => {
    const handleSearch = jest.fn()
    const wrapper = mount(<Controls handleSearch={handleSearch} />)

    wrapper.find('input').simulate('change')
    expect(handleSearch).toBeCalled()
  });

})
