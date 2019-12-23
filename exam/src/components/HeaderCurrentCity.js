import React  from 'react';
import styles from '../styles/headerManageCities.module.css';
import { ReactComponent as MenuButtonSvg } from '../assets/menu.svg';
import { ReactComponent as OptionsButtonSvg } from '../assets/options.svg';

export default function HeaderManageCities(props) {
    return (
        <div className={styles.header}>
            <button type='button' className={styles.headerButton}>
                <MenuButtonSvg className={styles.headerButtonSvg} />
            </button>
            <p className={styles.title}>Moscow</p>
            <button type='button' className={styles.headerButton}>
                <OptionsButtonSvg className={styles.headerButtonSvg} />
            </button>
        </div>
    );
}
