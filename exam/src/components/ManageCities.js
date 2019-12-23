import React, { useState } from 'react';
import styles from '../styles/manageCitiesStyles.module.css';
import { ReactComponent as AddCitySvg } from '../assets/addCity.svg';

export default function ManageCities(props) {
    const currentCity = '';
    const [ favoriteCities, setFavoriteCity ] = useState();

    function handleAddCity(props) {
        setFavoriteCity();
    };

    return(
        <div>
            <div className={styles.wrap}>
                {currentCity}
                {favoriteCities}
            </div>
            <AddCity handleAddCity={handleAddCity} />
        </div>        
    );
}

function AddCity(props) {
    return(
        <button type='button' className={styles.addCityButton}>
            <AddCitySvg className={styles.addCityButtonSvg} />
        </button>
    );
}
