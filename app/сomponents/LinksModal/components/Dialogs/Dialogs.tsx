import styles from "./Dialogs.module.css"
import { Buttons } from "../Buttons/Buttons"
import { socialLinks } from "~/constants"
import { Link } from "~/ui"
import type React from "react"
import { SocialLinks } from "../SocialLinks/SocialLinks"


interface Props {
    onClick: () => void
}

export function Dialogs({onClick}: Props) {
    return(
        <div className={styles.dialogs}>
            <Buttons onClick={onClick}/>
            {/* <div className={styles.links}>
                {socialLinks.map(({source, link, text}) => (
                    <div className={styles.link} key={source}>
                        {icons[source]}
                        <Link 

                            href={link}
                            text={text}
                        />
                    </div>
                ))}
            </div> */}
            <SocialLinks />
            <Buttons onClick={onClick} isBottom/>
        </div>
    )
}