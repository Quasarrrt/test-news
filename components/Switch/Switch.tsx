import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import styles from './Switch.module.css'

const Switch:React.FC = () => {

    const router = useRouter();

    return (
        <ul className={styles.ul}>
            <li className={styles.li}>
                <Link href="/">
                    <a className={router.pathname == "/" ? styles.link_active : styles.link}>Все</a>
                </Link>
            </li>
            <li className={styles.li}>
                <Link href="/events">
                    <a className={router.pathname == "/events" ? styles.link_active : styles.link}>События</a>
                </Link>
            </li>
            <li className={styles.li}>
                <Link href="/shopping">
                    <a className={router.pathname == "/shopping" ? styles.link_active : styles.link}>Шоппинг</a>
                </Link>
            </li>
        </ul>
    );
};

export default Switch;