import React from "react";
import styled from "styled-components";

interface GridBlockProps {
    templatecolumns?: string
    templaterows?: string
    columns?: string
    rows?: string
    gap?: string
    width?: string,
    height?: string,
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

export const GridBlock = styled('div')<GridBlockProps>`
& {
    display: grid;
    grid-template-columns: ${props => props.templatecolumns || ''};
    grid-template-rows: ${props => props.templaterows || ''};
    grid-column: ${props => props.columns || ''};
    grid-row: ${props => props.rows || ''};
    grid-gap: ${props => props.gap || ''};

    width: ${props => props.width || ''};
    height: ${props => props.height || ''};

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