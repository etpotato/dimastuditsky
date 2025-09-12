import cn from 'classnames';
import { Text } from "../Text/Text";
import styles from './Button.module.css'

interface Props {
    content: string;
    icon?: React.ReactNode
    className?: string;
    onClick?: () => void;
}

export function Button({content, icon, className, onClick}: Props) {

    return(
        <button
            className={cn(styles.button, className && className)}
            onClick={onClick && onClick}
        >
            {icon && icon}
            <Text
                content={content}
            />
        </button>
    )
}