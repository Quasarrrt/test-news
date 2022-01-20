import Head from 'next/head'

import styles from '../styles/Home.module.css'
import {getShoppingCards} from "../services/api/api";
import React, {useState} from "react";
import Header from "../components/Header/Header";

import {TCard} from "../services/types/Types";
import Card from "../components/Card/Card";
import Switch from "../components/Switch/Switch";
import {GetServerSideProps} from "next";


type EventsProps = {
    data: TCard;
}

const Events = ({data}:EventsProps) => {
    const [posts, setPosts] = useState<TCard>(data);

    return (
        <div className={styles.container}>
            <Head>
                <title>{posts?.meta.title} </title>
                <meta name ="description" content={posts?.meta.description } />
                <meta name="keywords" content={posts?.meta.keywords } />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header data={posts?.meta}/>
            <Switch/>

            <main className={styles.main}>
                <div>
                    {posts?.posts.items.map((item) => {
                        return (
                            <Card key={item.slug} card={item} />
                        );
                    })}
                </div>
                <hr className={styles.hr}/>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}
export const getServerSideProps: GetServerSideProps=async()=> {
    const data:TCard = await getShoppingCards();
    return { props: { data } }
}

export default Events
