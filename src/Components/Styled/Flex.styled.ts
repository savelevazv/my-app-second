import React from "react";
import styled from "styled-components";

interface FlexProps {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
    width?: string,
    height?: string,
    minHeight?: string,
    padding?: string,
    pt?: string;
    pl?: string;
    pr?: string;
    pb?: string;
    margin?: string,
    mt?: string;
    ml?: string;
    mr?: string;
    mb?: string;
}

export const Flex = styled('div')<FlexProps>`
& {
    display: flex;
    flex-direction: ${props => props.direction || ''};
    justify-content: ${props => props.justify || ''};
    align-items: ${props => props.align || ''};
    flex-wrap: ${props => props.wrap || ''};

    width: ${props => props.width || ''};
    height: ${props => props.height || ''};
    min-height: ${props => props.minHeight || ''};

    padding: ${props => props.padding || ''};
    padding-top: ${props => props.pt || ''};
    padding-left: ${props => props.pl || ''};
    padding-right: ${props => props.pr || ''};
    padding-bottom: ${props => props.pb || ''};

    margin: ${props => props.margin || ''};
    margin-top: ${props => props.mt || ''};
    margin-left: ${props => props.ml || ''};
    margin-right: ${props => props.mr || ''};
    margin-bottom: ${props => props.mb || ''};
}
`

export const StyledFlexContainer = styled(Flex) `
    & { 
        background: #F8F7F7;
        border: 1px solid #000000;
        box-sizing: border-box;
        box-shadow: 2px 4px 10px 5px rgb(0 0 0 / 15%);
        border-radius: 12px;
        cursor: pointer;
    }
`