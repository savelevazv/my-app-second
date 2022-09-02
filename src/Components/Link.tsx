import React from "react";
import { FC } from "react";

interface LinkProps {
    to: string,
    title: string,
    basicStyle?: boolean
}

export const Link: FC<LinkProps> = ({ to, title, basicStyle }): JSX.Element => {
    return (
        <div className={basicStyle ? "link--container" : "footer--link--container"}>
            <a href={to}>{title}</a>
        </div>
    )
}