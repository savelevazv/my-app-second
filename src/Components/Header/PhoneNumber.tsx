import React from "react";
import { FC } from "react";

interface PhoneNumberProps {
    number: string
}

export const PhoneNumber: FC<PhoneNumberProps> = ({ number }): JSX.Element => {
    const numberToStr = `tel: ${number}`
    return (
        <a href={numberToStr}>{number}</a>
    )
}