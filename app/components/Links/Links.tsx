import { IconLinks } from "~/assets";
import { Button } from "~/ui";
import styles from "./Links.module.css"
import { useEffect, useState } from "react";
import { LinksModal } from "../LinksModal/LinksModal";

export function Links() {
    const [modalOpen, setModalOpen] = useState(false);
    const openClickHandler = () => {
        window.scrollTo({top: 100, behavior: 'smooth'});
        setModalOpen(true)
    };
    const closeClickHandler = () => setModalOpen(false);
    
    useEffect(() => {
        const escKeydownHandler = (e: KeyboardEvent) => {
            if (e.key === 'Escape' || e.code === 'Escape') {
                setModalOpen(false)
            }
        }
        document.addEventListener('keydown', escKeydownHandler)

        return () => {
            document.removeEventListener('keydown', escKeydownHandler)
        }
    }, []) 

    return(
        <div className={styles.links}>
            <Button 
                content="Links" 
                icon={<IconLinks />} 
                onClick={openClickHandler}
                className={styles.linkButton}
            />
            <LinksModal open={modalOpen} onClick={closeClickHandler}/> 
        </div>
    )
}