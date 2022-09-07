import React, { ReactNode } from "react";
import { FC } from "react";
import styled from "styled-components";

const CenteredLayoutBodyContainer = styled('div')`
& {
    width: 1140px
}
`

export const CenteredLayoutBody: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <CenteredLayoutBodyContainer>
            {children}
        </CenteredLayoutBodyContainer>
    )
}