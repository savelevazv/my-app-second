import React from "react";
import { FC } from "react";
import { LinksStyled } from "../Link";

interface PhoneNumberProps {
    number: string
}

export const PhoneNumber: FC<PhoneNumberProps> = ({ number }): JSX.Element => {
    const numberToStr = `tel: ${number}`
    return (
        <LinksStyled href={numberToStr}>{number}</LinksStyled>
    )
}