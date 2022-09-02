import React, { ReactNode } from "react";
import { FC } from "react";

export const CenteredLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="centered--layout--container">
            {children}
        </div>
    )
}