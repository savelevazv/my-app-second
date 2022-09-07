import React, { ReactNode } from "react";
import { FC } from "react";
import styled from 'styled-components';

interface StyledButtonProps {
    width?: string
}

const StyledButton = styled('button')<StyledButtonProps>`
& {
    font-size: 16px;
    line-height: 19px;

    color: white;
    padding: 11px;
    width: ${props => props.width || '190px'};
    background: #0047FF;
    border-radius: 8px;
    text-align: center;
    border: none;
    cursor: pointer;
}
`

interface BtnProps {
    children: ReactNode,
    onClick?: (e: any) => void,
}

export const Btn: FC<BtnProps> = ({ children, onClick }): JSX.Element => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export const BuyBtn: FC<BtnProps> = ({ children, onClick }): JSX.Element => {
    return (
        <StyledButton width={'140px'} onClick={onClick}>
            {children}
        </StyledButton>
    )
}