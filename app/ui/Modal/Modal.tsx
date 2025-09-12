import { useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: React.ReactNode
}

export function Modal({children}: Props) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])
    return(
        createPortal(
            children,
            document.body
        )
    )
}