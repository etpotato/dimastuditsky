
import type { GetPropertiesReturnType } from "~/types";
import { Text } from "~/ui";
import styles from './Sets.module.css'
import { SetCard } from "./components/SetCard/SetCard";

type Props = Omit<GetPropertiesReturnType, 'setsCount'>

export function Sets({yearsList, properties}: Props) {
    return(
        <div className={styles.sets}>
            {yearsList?.map((year) => (
                <div className={styles.setsProperty} key={year}>
                    <Text className={styles.setsYear} content={year}/>
                    <ul className={styles.setsContainer}>
                        {properties[year].map((set, idx) => {
                            if (Array.isArray(set)) {
                                return(
                                <li key={`${idx}-${set[0].id}`}>
                                    <ul className={styles.setGroup}>
                                        {set.map(s => 
                                            <li key={s.id}>
                                                <SetCard {...s}/>
                                            </li>    
                                        )}
                                    </ul>
                                </li>
                                )
                            }
                            return(
                                <li key={set.id}>
                                    <SetCard {...set}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            ))}
        </div>
    )
}