import React  from 'react';
import styles from '../styles/headerManageCities.module.css';
import { ReactComponent as ReturnButtonSvg } from '../assets/return.svg';
import { ReactComponent as EditButtonSvg } from '../assets/edit.svg';

export default function HeaderManageCities(props) {
    return (
        <div className={styles.header}>
            <button type='button' className={styles.headerButton}>
                <ReturnButtonSvg className={styles.headerButtonSvg} />
            </button>
            <p className={styles.title}>Manage Cities</p>
            <button type='button' className={styles.headerButton}>
                <EditButtonSvg className={styles.headerButtonSvg} />
            </button>
        </div>
    );
}
