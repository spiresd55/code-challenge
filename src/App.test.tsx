import React from 'react';
import {shallow} from "enzyme";
import App from './App';

describe("App.tsx", () => {
  it("Should render without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });
});