import {Modal } from "~/ui";
import styles from "./LinksModal.module.css"
import { Header } from "~/сomponents";
import { Dialogs } from "./components/Dialogs/Dialogs";

interface Props {
    open: boolean;
    onClick: () => void;
}

export function LinksModal({open, onClick}: Props) {
   
    if (!open) return null
    const headerItems = ["Dima Studitsky", "Дима Студицкий"]
    return(
        <Modal>
            <div className={styles.modal}>
                <div className={styles.overlay} onClick={onClick}>
                    <Header items={headerItems} isModal/>
                    <Header items={headerItems.toReversed()} isModal/> 
                </div>
                <div className={styles.content}>
                    <Dialogs onClick={onClick}/>
                </div>
            </div>
        </Modal>
    )
}