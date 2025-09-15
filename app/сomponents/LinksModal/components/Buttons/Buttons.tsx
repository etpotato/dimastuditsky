import { IconLinks } from "~/assets";
import { Button } from "~/ui";
import styles from "./Buttons.module.css"

interface Props {
    onClick: () => void
    isBottom?: boolean;
}

export function Buttons({onClick, isBottom}: Props) {
    const buttons = [
        <Button 
            className={styles.links} 
            content={!isBottom ? "Links" : "Ссылки"} 
            key={"Links"} icon={<IconLinks />}
        />,
        <Button 
            className={styles.close}
            content={!isBottom ? "Close" : "Закрыть"} 
            onClick={onClick} 
            key={"Close" }
        />
    ]
    if (isBottom) buttons.reverse()
    return(
        <div className={styles.buttons}>
            {buttons.map((button) => button)}
        </div>
    ) 
}