import React, { useState, Dispatch, SetStateAction } from 'react';

type AddCategoryFieldProps = {
    setCategories: Dispatch<SetStateAction<string[]>>;
}

const AddCategoryField = ({ setCategories }: AddCategoryFieldProps) => {

    const [inputValue, setInputValue] = useState('');

    const handleOnChange = ({target}: any) => {
        setInputValue(target.value);
    }

    const handleOnSubmit = (e: any) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategories((categories: string[]) => [ inputValue, ...categories ]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleOnSubmit }>
            <input 
                type='text'
                value={ inputValue }
                onChange={ handleOnChange }
            />
        </form>
    );
}

export default AddCategoryField;