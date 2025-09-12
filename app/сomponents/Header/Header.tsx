import cn from 'classnames';
import { Text } from '~/ui';
import styles from './Header.module.css'

interface Props {
    items: string[];
    isModal?: boolean;
}

export function Header({items, isModal}: Props) {
    console.log(items)
    return(
        <div className={styles.header}>
            {items.map((item, idx) => <Text content={item} className={cn(styles.headerEl, !isModal && idx === 1 && styles.hide)} key={item}/>)}
        </div>
    ) 
}