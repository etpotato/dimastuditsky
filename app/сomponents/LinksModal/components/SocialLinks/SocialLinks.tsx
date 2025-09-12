import { IconSoundcloud, IconInstagram, IconLinktr } from "~/assets"
import { socialLinks } from "~/constants"
import { Link, Text } from "~/ui"
import styles from './SocialLinks.module.css'

export function SocialLinks() {
    const icons: Record<string, React.ReactNode> = {
        "soundcloud": <IconSoundcloud />,
        "instagram": <IconInstagram />,
        "linktr": <IconLinktr />
    }

    return(
        <div className={styles.links}>
            {socialLinks.map(({source, link, text}) => (
                <Link 
                    href={link}
                    key={source}
                    className={styles.link}
                >
                    {icons[source]}
                    <Text content={text}/>
                </Link>
            ))}
        </div>
    )
}