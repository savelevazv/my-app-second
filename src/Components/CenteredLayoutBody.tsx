import React, { ReactNode } from "react";
import { FC } from "react";

export const CenteredLayoutBody: FC<{ children: ReactNode }>= ({ children }) => {
    return (
        <div className="centered--layout--body">
                {children}
        </div>
    )
}