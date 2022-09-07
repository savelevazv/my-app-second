import React, { ReactNode } from "react";
import { FC } from "react";
import styled from "styled-components";
import { Flex } from "./Styled/Flex.styled";

interface CenteredLayoutContainerProps {
    width?: string
}

export const CenteredLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Flex
            justify={'center'}
            align={'flex-start'}
            wrap={'wrap'}
            width={'100%'}
        >
            {children}
        </Flex>
    )
}