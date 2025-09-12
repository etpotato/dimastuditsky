import { IconLinks } from "~/assets";
import { Button } from "~/ui";
import styles from "./Buttons.module.css"

interface Props {
    onClick: () => void
    isBottom?: boolean;
}

export function Buttons({onClick, isBottom}: Props) {
    const buttons = [
        <Button content={!isBottom ? "Links" : "Ссылки"} icon={<IconLinks />}/>,
        <Button content={!isBottom ? "Close" : "Закрыть"} onClick={onClick} />
    ]
    if (isBottom) buttons.reverse()
    return(
        <div className={styles.buttons}>
            {buttons.map((button) => button)}
        </div>
    ) 
}