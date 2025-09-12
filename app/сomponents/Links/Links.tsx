import { IconLinks } from "~/assets";
import { Button } from "~/ui";
import styles from "./Links.module.css"
import { useState } from "react";
import { LinksModal } from "../LinksModal/LinksModal";

export function Links() {
    const [modalOpen, setModalOpen] = useState(false);
    const openClickHandler = () => setModalOpen(true);
    const closeClickHandler = () => setModalOpen(false)
    return(
        <div className={styles.links}>
            <Button content="Links" icon={<IconLinks />} onClick={openClickHandler}/>
            <LinksModal open={modalOpen} onClick={closeClickHandler}/> 
        </div>
    )
}