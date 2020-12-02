import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

describe('App', () => {
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
  
  beforeEach(() => (container = shallow (<App />)))

  it("Testing that App.tsx have a <div />",() => {
    expect(container.find('div').length).toEqual(1)
  }) // test to check that App.tsx must have one div

  it("Testing that App.tsx have a <timer /> component ",() => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true)
  }) // test to check that App.tsx contains a <Timer /> component
});