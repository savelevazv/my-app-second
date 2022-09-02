import React from "react";
import { FC } from "react";

interface ArrowProps {
    direction: string,
    onClick?: () => void
}

export const Arrow: FC<ArrowProps> = ({ direction, onClick }): JSX.Element => {
    return (
        <button className="round">
            {direction == 'right'
                ? <svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.895812 22.5625L10.4375 13L0.895812 3.4375L3.83331 0.5L16.3333 13L3.83331 25.5L0.895812 22.5625Z" fill="white"></path>
                </svg>
                : <svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1042 22.5625L6.56252 13L16.1042 3.4375L13.1667 0.5L0.666687 13L13.1667 25.5L16.1042 22.5625Z" fill="white"></path>
                </svg>}
        </button>
    )
}