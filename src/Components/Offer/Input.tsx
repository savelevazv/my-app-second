import React from "react";
import { useState } from "react";
import { FC } from "react";

interface InputProps {
    type: string,
    placeholder: string,
    id: string,
    onChange?: () => void
}

export const Input: FC<InputProps> = ({ type, placeholder, id, onChange }): JSX.Element => {
    const [value, setValue] = useState<string>('')

    return (
        <input className="input--style font--base style16"
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={event => setValue(event.target.value)}
        />
    )
}