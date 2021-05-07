import React from 'react';
import styles from './GifGridItem.module.scss';

type GifGridItemProps = {
    title: string;
    url: string;
}

const GifGridItem = ({ title, url }: GifGridItemProps) => {

    return (
        <div className={ styles.card }>
            <img src={ url } alt={ title } />
            <div className={ styles.container }>
                <small>{ title }</small>
            </div>
        </div>
    );
}

export default GifGridItem;