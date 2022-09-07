import React from "react";
import { FC } from "react";
import { NavigationArrayItem } from "./Categories";
import styled, { css } from "styled-components";

interface LinkProps extends NavigationArrayItem {
    basicStyle?: boolean
}

interface LinksContainerProps {
    basicStyle?: boolean
}

const headerLinksCss = css`
&:not(:last-child) {
    padding-right: 44px;
}
`

const footerLinksCss = css`
& {
    padding-bottom: 8px;
}
`

const LinksContainer = styled('div') <LinksContainerProps>`
${props => props.basicStyle ? headerLinksCss : footerLinksCss}
`

export const LinksStyled = styled('a') `
& {
    text-decoration: none;
}
`

export const Link: FC<LinkProps> = ({ to, title, basicStyle }): JSX.Element => {
    return (
        <LinksContainer basicStyle={basicStyle}>
            <LinksStyled href={to}>{title}</LinksStyled>
        </LinksContainer>
    )
}