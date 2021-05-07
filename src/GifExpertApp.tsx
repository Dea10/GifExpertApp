import React, { useState } from 'react';
import AddCategoryField from './components/AddCategoryField/AddCategoryField';
import GifGrid from './components/GifGrid/GifGrid';
import styles from './GifExpertApp.module.scss';

const GifExpertApp = () => {

    const [categories, setCategories] = useState<string[]>([]);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategoryField
                setCategories={setCategories}
            />

            <div className={ styles.container }>
                {categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))}
            </div>
        </div>
    );
}

export default GifExpertApp;