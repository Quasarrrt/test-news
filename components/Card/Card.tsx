import React from 'react';
import parse from 'html-react-parser';
import Image from 'next/image'
import {TItem} from "../../services/types/Types";
import styles from './Card.module.css'

interface ICard {
    card: TItem;
}
const Card: React.FC<ICard>= ({card}) => {
    let html: string = card?.lead || "";
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <Image
                    src={card?.preview_image.regular_set[0].src }
                    alt={card.title}
                    layout={"fill"}
                    objectFit={"cover"}

                />
            </div>
            <div className={styles.textContainer}>
                <p className={styles.title}>
                    {card?.title}
                </p>
                <p className={styles.description}>
                    {parse(html)}
                </p>
            </div>


        </div>

    );
};



export default Card;