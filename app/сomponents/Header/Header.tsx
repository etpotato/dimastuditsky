import { Text } from '~/ui';
import styles from './Header.module.css'

interface Props {
    setsCount: number;
    isBottom?: boolean
}

export function Header({setsCount, isBottom}: Props) {
    const headerItems = ["Dima Studitsky", `${setsCount} sets in library`, "Дима Студицкий"]
    if (isBottom) headerItems.reverse().splice(1, 1, `${setsCount} сета в библиотеке`);
    return(
        <div className={styles.header}>
            {headerItems.map((item) => <Text content={item} className={styles.headerEl} key={item}/>)}
        </div>
    ) 
}