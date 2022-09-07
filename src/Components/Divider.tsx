import React from "react";
import { FC } from "react";
import styled from "styled-components";

const StyledDivider = styled('div') `
    & {
        border-bottom: 1px solid #C4C4C4
    }
`

export const Divider: FC = () => {
    return (
        <StyledDivider/>
    )
}