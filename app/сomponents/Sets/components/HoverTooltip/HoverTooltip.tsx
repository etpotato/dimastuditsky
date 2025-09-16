import React, { useState } from "react";
import { Text } from "~/ui";
import styles from './HoverTooltip.module.css'
import { getSource } from "../../utils/getSource";
import { sources } from "./HoverTooltip.utils";
import cn from "classnames";


interface Props {
    children: React.ReactNode;
    url: string;
    className?: string;
}

export function HoverTooltip({children, url, className}: Props) {
    const [position, setPosition] = useState({x: -100, y: -100})
    const [visible, setVisible] = useState(false)

    const mouseMoveHandler = (e: React.MouseEvent) => setPosition({x: e.clientX, y: e.clientY})
    const mouseEnterHandler = () => setVisible(true)
    const mouseLeaveHandler = () => setVisible(false)

    const source = getSource(url)
    const tooltipText = source.charAt(0).toUpperCase() + source.slice(1)

    return(
        <div
            onMouseMove={mouseMoveHandler}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className={cn(styles.tooltip, className && className)}
        >
            {children}
            {visible && 
                <div 
                    className={styles.tooltipContent}
                    style={{
                        top: `${position.y + 21}px`,
                        left: `${position.x}px`
                    }}
                >
                    <Text content={`Listen on ${sources[source]}`} className={styles.tooltipText}/>
                </div>
            }
        </div>
    )
}