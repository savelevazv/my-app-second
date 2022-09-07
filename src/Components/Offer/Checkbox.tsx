import React from "react";
import { FC } from "react";
import styled from "styled-components";

interface CheckboxProps {
    type: string,
    id?: string,
    title: string
}

const CheckBoxLabel = styled('label') `
    & {
        display: inline-flex;
        align-items: center;
        cursor: pointer;

        font-size: 16px;
        line-height: 19px;
    }

    &:before {
        content: '';
        width: 17px;
        height: 17px;
        border: 2px solid #0047FF;
        box-sizing: border-box;
        border-radius: 4px;
        margin-right: 20px;
    }

`

const CheckBoxInput = styled('input') `
    & {
        position: absolute;
        z-index: -1;
        width: 17px;
        height: 17px;
    }
`

export const Checkbox: FC<CheckboxProps> = ({ type, id, title }): JSX.Element => {
    return (
        <CheckBoxLabel>
            <CheckBoxInput type={type} id={id}/>{title}
        </CheckBoxLabel>
    )
}