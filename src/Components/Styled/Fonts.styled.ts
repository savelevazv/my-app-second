import React from "react";
import styled from "styled-components";

interface TitleProps {
    margin?: string
    textAlign?: string
}

export const Title = styled('h3')<TitleProps>`
    & {
        font-size: 36px;
        line-height: 44px;
        font-weight: 400;
        text-align: ${props => props.textAlign || ''};
        margin: ${props => props.margin || ''};
    }
`

export const StyledFont24 = styled('div')`
    & {
        font-size: 24px;
        line-height: 29px;
    }
`

export const StyledFont22 = styled('div') `
    & {
        font-size: 22px;
        line-height: 27px;
    }
`

export const StyledFont20 = styled('div')`
    & {
        font-size: 20px;
        line-height: 24px;
    }
`
export const StyledFont16 = styled('div')`
    & {
        font-size: 16px;
        line-height: 19px;
    }
`
