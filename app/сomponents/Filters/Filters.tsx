import cn from "classnames";
import { getSource } from '~/lib/get-source';
import { TrackSource, TrackSourceRu } from "~/types";
import { SOURCE_SEARCH_PARAM_NAME } from "~/constants";
import styles from './Filters.module.css'
import { useSearchParams } from 'react-router';
import { Link } from "react-router";
import { Text } from "~/ui";

interface Props {
    isBottom?: boolean
} 

export function Filters({isBottom}: Props) {
    const [searchParams] = useSearchParams();
    const activeSource = getSource(searchParams.get(SOURCE_SEARCH_PARAM_NAME));

    return(
        <ul className={styles.list}>
            <li className={cn(styles.full, {
                [styles.last]: isBottom
            })}>
                <Link
                    to="/"
                    target="_self"
                    className={cn(styles.filter, { [styles.active]: !activeSource })}
                >
                    <Text 
                        className={styles.filterText}
                        content={!isBottom ? "All platforms" : "Все платформы"}
                    />                    
                </Link>
            </li>
            {Object.values(TrackSource).map((source) => (
            <li
                key={source}
            >  
                <Link 
                    to={`/?${SOURCE_SEARCH_PARAM_NAME}=${source}`}
                    target="_self"
                    className={cn(styles.filter, {
                        [styles.active]: source === activeSource,
                        })}
                >
                    <Text 
                        className={styles.filterText}
                        content={!isBottom ? source : TrackSourceRu[source]}
                    />
                </Link>
            </li>
            ))}
      </ul>
    )
}