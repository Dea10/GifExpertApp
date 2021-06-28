import React from 'react';
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid/GifGrid";

describe('GifGrid tests', () => {
    const category = 'xmen';
    const wrapper = shallow(<GifGrid category={ category } />)
    
    test('should render without errors', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('', () => {
        
    });
});