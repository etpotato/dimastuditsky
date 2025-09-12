import cn from 'classnames';
import type React from 'react';
import styles from './Link.module.css'

interface Props {
    href: string;
    text?: string;
    target?: '_blank' | '_self';
    children?: React.ReactNode;
    className?: string;
}

export function Link({href, text, target = '_blank', children, className}: Props) {
    return(
        <a href={href} target={target} className={cn(styles.link, className && className)}>
            {children ? children : text}
        </a>
    ) 
}