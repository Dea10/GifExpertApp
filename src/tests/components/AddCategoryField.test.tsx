import React from 'react';
import { shallow } from 'enzyme';
import AddCategoryField from '../../components/AddCategoryField/AddCategoryField';

describe('AddCategoryField tests', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategoryField setCategories={ setCategories } />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategoryField setCategories={ setCategories } />);
    });

    test('should render without errors', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should not send info on submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault: () => {}});

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should simulate a succesful input attempt', () => {
        // simulate onChange
        const value = 'Hello World!';
        const inputForm = wrapper.find('input');
        inputForm.simulate('change', {target: {value}});

        // simulate onSubmit
        wrapper.find('form').simulate('submit', {preventDefault: () => {}});
        expect(setCategories).toHaveBeenCalledTimes(1);

        expect(inputForm.prop('value')).toBe('');
    });
});