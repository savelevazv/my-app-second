import React, {ReactNode} from "react"
import { FC } from "react";

export const Offer: FC<{children: ReactNode}> = ({ children }) => {
    return (
        <div className="offer--container">
            {children}
        </div>
    )
}