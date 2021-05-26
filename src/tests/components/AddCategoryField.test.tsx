import React from 'react';
import { shallow } from 'enzyme';
import AddCategoryField from '../../components/AddCategoryField/AddCategoryField';

describe('AddCategoryField tests', () => {

    const setCategories = () => {};

    test('should render without errors', () => {
        const wrapper = shallow(<AddCategoryField setCategories={ setCategories } />)
        expect(wrapper).toMatchSnapshot();
    });
});