import cn from "classnames";
import { getSource } from '~/lib/get-source';
import { TrackSource, TrackSourceRu } from "~/types";
import { SOURCE_SEARCH_PARAM_NAME } from "~/constants";
import styles from './Filters.module.css'
import { useSearchParams } from 'react-router';
import { Link } from "~/ui";

interface Props {
    isBottom?: boolean
} 

export function Filters({isBottom}: Props) {
    const [searchParams] = useSearchParams();
    const activeSource = getSource(searchParams.get(SOURCE_SEARCH_PARAM_NAME));

    return(
        <ul className={styles.list}>
            <li className={styles.full}>
                <Link
                    href="/"
                    target="_self"
                    className={cn(styles.filter, { [styles.active]: !activeSource })}
                >
                    {!isBottom 
                        ? "All platforms"
                        : "Все платформы"
                    }
                    
                </Link>
            </li>
            {Object.values(TrackSource).map((source) => (
            <li
                key={source}
            >  
                <Link 
                    href={`/?${SOURCE_SEARCH_PARAM_NAME}=${source}`}
                    target="_self"
                    className={cn(styles.filter, {
                        [styles.active]: source === activeSource,
                        })}
                >{
                    !isBottom 
                        ? source
                        : TrackSourceRu[source]
                }</Link>
            </li>
            ))}
      </ul>
    )
}