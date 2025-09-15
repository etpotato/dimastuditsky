
import type { GetPropertiesReturnType } from "~/types";
import { Text } from "~/ui";
import styles from './Sets.module.css'
import { SetCard } from "./components/SetCard/SetCard";
import { HoverTooltip } from "./components/HoverTooltip/HoverTooltip";

type Props = Omit<GetPropertiesReturnType, 'setsCount'>

export function Sets({yearsList, properties}: Props) {
    return(
        <div className={styles.sets}>
            {yearsList?.map((year) => (
                <div className={styles.setsProperty} key={year}>
                    <Text className={styles.setsYear} content={year.toString()}/>
                    <div className={styles.setsContainer}>
                        {properties[year].map((set) => (
                            <HoverTooltip url={set.url} key={set.id}>
                                <SetCard {...set}/>
                            </HoverTooltip>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}