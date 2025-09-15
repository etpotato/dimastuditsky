import type { SetType } from "~/types";
import styles from "./SetCard.module.css"
import { Link, Text } from "~/ui";
import { getSource } from "../../utils/getSource";
import { CardIcon } from "../CardIcon/CardIcon";

export function SetCard({title, date, artwork, url, duration}: SetType) {
    const source = getSource(url)
    
    return(
        <Link href={url} className={styles.setCard}>
            <Text content={date} className={styles.setDate}/>
            <div className={styles.setImgs}>
                <img 
                    src={artwork} 
                    className={styles.setImg}
                    alt={`Облжока ${title}`} 
                />
                <div className={styles.setSource}>
                    <CardIcon source={source} />
                </div>
            </div>
            <Text content={title} className={styles.setTitle}/>
            <Text content={duration.toString()} className={styles.setDuration}/>
        </Link>
    )
}