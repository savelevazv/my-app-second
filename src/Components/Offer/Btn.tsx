import React, { ReactNode } from "react";
import { FC } from "react";

interface BtnProps {
    children: ReactNode,
    onClick?: (e: any) => void,
    isOptional?: boolean

}

export const Btn: FC<BtnProps> = ({ children, onClick, isOptional }): JSX.Element => {
    return (
        <button className={isOptional ? "btn--optional font--base style16" : "btn font--base style16"} onClick={onClick}>
            {children}
        </button>
    )
}