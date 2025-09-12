import styles from "./Dialogs.module.css"
import { Buttons } from "../Buttons/Buttons"

interface Props {
    onClick: () => void
}

export function Dialogs({onClick}: Props) {
    return(
        <div className={styles.dialogs}>
            <Buttons onClick={onClick}/>
            <div className={styles.links}>
                
            </div>
            <Buttons onClick={onClick} isBottom/>
        </div>
    )
}