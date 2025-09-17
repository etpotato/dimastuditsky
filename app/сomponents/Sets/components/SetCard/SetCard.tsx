import type { Track } from "~/types";
import styles from "./SetCard.module.css"
import { Link, Text } from "~/ui";
import { getSource } from "../../utils/getSource";
import { CardIcon } from "../CardIcon/CardIcon";
import { getFormattedDuration } from "../../utils/getFormattedDuration";
import { HoverTooltip } from "../HoverTooltip/HoverTooltip";
import { memo } from "react";

export const SetCard = memo(function ({created_at, artwork_url, duration, title, url}: Track) {
    const source = getSource(url)
    const formattedDuration = getFormattedDuration(duration)
    const trackDate = new Date(created_at)
    const date = `${('0' + trackDate.getDate()).slice(-2)}.${('0' + (trackDate.getMonth() + 1)).slice(-2) }`

    
    return(
        <div className={styles.setCard}>
            <Text content={date} className={styles.setDate}/>
            <HoverTooltip url={url} className={styles.setTooltip}>
                <Link
                    href={url}
                >
                    <div className={styles.setCell}>
                        <Text content={date} className={styles.setDatePc}/>
                        <div className={styles.setImgs}>
                            <img 
                                src={artwork_url} 
                                className={styles.setImg}
                                alt={`Artwork ${title}`} 
                            />
                            <div className={styles.setSource}>
                                <CardIcon source={source} />
                            </div>
                        </div>
                        <Text content={title.toUpperCase()} className={styles.setTitle}/>
                    </div>
                </Link>
            </HoverTooltip>
            <Text content={formattedDuration} className={styles.setDuration}/>
        </div>
    )
})