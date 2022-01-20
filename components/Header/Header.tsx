import React from 'react';
import {TMeta} from "../../services/types/Types";
import styles from './Header.module.css'
interface IHeader {
    data: TMeta|undefined;
}
const Header: React.FC<IHeader>= ({data}) => {
    return (
        <header className={styles.header}>
            <p className={styles.title}>
                {data?.title}
            </p>
            <p className={styles.description}>
                {data?.description}
            </p>
        </header>

    );
};

export default Header;