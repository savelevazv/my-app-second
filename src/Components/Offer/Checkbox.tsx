import React from "react";
import { FC } from "react";

interface CheckboxProps {
    type: string,
    id?: string,
    title: string
}

export const Checkbox: FC<CheckboxProps> = ({ type, id, title }): JSX.Element => {
    return (
        <label className="checkbox--label font--base style16">
            <input className="checkbox--input" type={type} id={id}/>{title}
        </label>
    )
}