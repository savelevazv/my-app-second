import React, { ChangeEvent } from "react";
import { useState } from "react";
import { FC } from "react";
import styled from "styled-components";

export const InputStyled = styled('input')`
& {
    font-size: 16px;
    line-height: 19px;
    
    text-align: left;
    padding: 18px 20px 18px 20px;
    background: #FFFFFF;
    border: 1px solid #0047FF;
    box-sizing: border-box;
    box-shadow: 4px 4px 10px 2px rgb(0 0 0 / 25%);
    border-radius: 12px;
}
`

interface InputProps {
    type: string,
    placeholder: string,
    id: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({ type, placeholder, id, onChange }): JSX.Element => {
    const [value, setValue] = useState<string>('')

    return (
        <InputStyled
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={e => setValue(e.target.value)}
        />
    )
}