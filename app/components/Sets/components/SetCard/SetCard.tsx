import type { Track } from "~/types";
import styles from "./SetCard.module.css";
import { Link, Text } from "~/ui";
import { getSource } from "../../utils/getSource";
import { CardIcon } from "../CardIcon/CardIcon";
import { getFormattedDuration } from "../../utils/getFormattedDuration";
import { memo } from "react";

interface Props {
  card: Track;
  isGroup?: boolean;
  index?: number;
}

export const SetCard = memo(function ({ card, isGroup, index }: Props) {
  const { created_at, artwork_url, duration, title, url } = card;
  const source = getSource(url);
  const formattedDuration = getFormattedDuration(duration);
  const trackDate = new Date(created_at);
  const date = `${("0" + trackDate.getDate()).slice(-2)}.${("0" + (trackDate.getMonth() + 1)).slice(-2)}`;

  return (
    <div className={styles.setCard}>
      {isGroup ? (
        index === 0 && <Text content={date} className={styles.setDate} />
      ) : (
        <Text content={date} className={styles.setDate} />
      )}
      
      <Link href={url} className={styles.setLink}>
        <div className={styles.setCell}>
          {isGroup ? (
            index === 0 && <Text content={date} className={styles.setDatePc} />
          ) : (
            <Text content={date} className={styles.setDatePc} />
          )}
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
          <Text content={title.toUpperCase()} className={styles.setTitle} />
        </div>
      </Link>
      <Text content={formattedDuration} className={styles.setDuration} />
    </div>
  );
});
