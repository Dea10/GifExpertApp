import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem/GifGridItem';

describe('GifGridItem tests', () => {
    const url = 'url';
    const title = 'title';
    
    const wrapper = shallow(<GifGridItem url={ url } title={ title } />);
    const img = wrapper.find('img');

    test('should render without errors', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('div should have card style class', () => {
        const div = wrapper.find('div').first()
        expect(div.prop('className')).toBe('card');
    });

    test('img src should render properly', () => {
        expect(img.prop('src')).toBe(url);
    });

    test('img alt should render properly', () => {
        expect(img.prop('alt')).toBe(title);
    });
});
