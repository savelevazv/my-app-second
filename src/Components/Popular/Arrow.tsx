import React from "react";
import { FC } from "react";
import { Flex } from "../Styled/Flex.styled";
import { SvgLeft } from "./SvgLeft";
import { SvgRight } from "./SvgRight";
import styled from "styled-components";

interface ArrowProps {
    direction: string,
    onClick?: () => void
}

const Round = styled(Flex)`
    & {
        background: #0047FF;
        box-shadow: 0px 0px 10px 10px #e5e5e5;
        border-radius: 50px;
        border: none;
        cursor: pointer;
    }
`

export const Arrow: FC<ArrowProps> = ({ direction, onClick }): JSX.Element => {
    return (
        <Round
            direction={'row'}
            justify={'center'}
            align={'center'}
            wrap={'nowrap'}
            width={'40px'}
            height={'40px'}
            margin={'20px'}
        >
            {direction == 'right'
                ? <SvgRight />
                : <SvgLeft />
            }
        </Round>
    )
}