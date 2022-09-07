import React, {ReactNode} from "react"
import { FC } from "react";
import styled from "styled-components";
import { Flex } from "../Styled/Flex.styled";

const StyledOfferContainer = styled(Flex) `
    & {
        list-style: none;
        align-items: flex-start;
    }
`

export const Offer: FC<{children: ReactNode}> = ({ children }) => {
    return (
        <StyledOfferContainer
            direction={'row'}
            wrap={'nowrap'}
            margin={'48px 0 8px 0'}
        >
            {children}
        </StyledOfferContainer>
    )
}