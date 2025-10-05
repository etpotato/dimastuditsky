import type { TrackListByYear } from "~/types";
import { Text } from "~/ui";
import styles from "./Sets.module.css";
import { SetCard } from "./components/SetCard/SetCard";

type Props = {
  trackList: TrackListByYear;
};

export function Sets({ trackList }: Props) {
  const yearsList = Object.keys(trackList).sort((a, b) => +b - +a);

  return (
    <div className={styles.sets}>
      {yearsList?.map((year) => (
        <div className={styles.setsProperty} key={year}>
          <Text className={styles.setsYear} content={year} />
          <ul className={styles.setsContainer}>
            {trackList[year].map((set, idx) => {
              if (Array.isArray(set)) {
                return (
                  <li key={`${idx}-${set[0].id}`}>
                    <ul className={styles.setGroup}>
                      {set.map((s, idx) => (
                        <li key={s.id}>
                          <SetCard card={s} isGroup index={idx} />
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={set.id}>
                  <SetCard card={set} />
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
