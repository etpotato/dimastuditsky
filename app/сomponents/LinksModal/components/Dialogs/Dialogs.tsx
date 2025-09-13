import styles from "./Dialogs.module.css"
import { Buttons } from "../Buttons/Buttons"
import { SocialLinks } from "../SocialLinks/SocialLinks"


interface Props {
    onClick: () => void
}

export function Dialogs({onClick}: Props) {
    return(
        <div className={styles.dialogs}>
            <Buttons onClick={onClick}/>
            <SocialLinks />
            <Buttons onClick={onClick} isBottom/>
        </div>
    )
}