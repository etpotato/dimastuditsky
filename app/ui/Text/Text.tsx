import cn from 'classnames';
import styles from './Text.module.css'

interface Props {
    content: string 
    className?: string;
} 

export function Text({content, className}: Props) {
    return(
        <p className={cn(styles.text, className && className)}>{content}</p>
    ) 
}