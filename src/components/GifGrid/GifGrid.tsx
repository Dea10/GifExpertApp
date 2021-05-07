import React from 'react';
import useFetchGifs from '../../hooks/useFetchGifs';
import GifGridItem from '../GifGridItem/GifGridItem';
import styles from './GifGrid.module.scss';

type GifGridProps = {
    category: string;
}

const GifGrid = ({ category }: GifGridProps) => {

    const { data: images, loading } = useFetchGifs( category );

    return (
        <div>
        <h3>{category}</h3>
            {loading && 'loading...'}
            <ol className={ styles.grid }>
                {
                    images.map(img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img } // rest parameter
                        />
                    ))
                }
            </ol>
        </div>
    );
}

export default GifGrid;