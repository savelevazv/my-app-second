import React from "react";
import { FC } from "react";
import { Flex } from "./Styled/Flex.styled";
import styled, { css } from "styled-components";
import { GridBlock } from "./Styled/Grid.styled";
import { StyledFont20, Title } from "./Styled/Fonts.styled";

interface NewProductsInfoProps {
    title: string,
    mainDescription?: string,
    description?: string,
    isMain?: boolean,
    additional?: boolean
}

const primary = css`
& {
    padding-left: 28px;
    padding-bottom: 40px;
    grid-column: 1/6;
    grid-row: 1/5;
    align-items: flex-start;
}
`

const secondary = css`
& {
    padding: 0 24px 24px 0;
    grid-column: 6/9;
    grid-row: 1/3;
    align-items: flex-end;
}
`

const tertiary = css`
& {
    padding: 0 24px 24px 0;
    grid-column: 6/9;
    grid-row: 3/5;
    align-items: flex-end;
}
`

interface CardContainerProps {
    isMain?: boolean,
    additional?: boolean
}

const CardContainer = styled(Flex) <CardContainerProps>`
& {
    min-height: 258px;
    background-color: #F8F7F7;
    border: 1px solid #000000;
    box-shadow: 2px 4px 10px 5px rgb(0 0 0 / 15%);
    border-radius: 12px;
}

${props => props.isMain ? primary : props.additional ? secondary : tertiary}
`

const MarginTopDescription = css`
    & {
        margin-top: 16px;
    }
`

const MarginDescriptionZero = css`
    & {
        margin: 0;
    }
`
interface DescriptionTitleProps {
    description?: string
}

const DescriptionTitle = styled(StyledFont20)<DescriptionTitleProps>`
    ${props => props.description ? MarginTopDescription : MarginDescriptionZero}
`

export const NewProductsInfo: FC<NewProductsInfoProps> = ({ title, mainDescription, description, isMain, additional }): JSX.Element => {
    return (
        <CardContainer isMain={isMain} additional={additional}
            direction={'column'}
            justify={'flex-end'}
        >
            <Title>{title}</Title>
            <Title>{mainDescription}</Title>
            <DescriptionTitle description={description}>{description}</DescriptionTitle>
        </CardContainer>
    )
}

interface NewProductsProps {
    mainPlacement: NewProductsInfoProps,
    secondaryPlacement: NewProductsInfoProps,
    secondarySecondPlacement: NewProductsInfoProps
}

export const NewProducts: FC<NewProductsProps> = ({ mainPlacement, secondaryPlacement, secondarySecondPlacement }): JSX.Element => {
    return (
        <Flex
            direction={'column'}
            align={'flex-start'}
            wrap={'nowrap'}
        >
            <Title margin={'40px 0 30px 0'}>Новинки</Title>
            <GridBlock
                templatecolumns={'repeat(8, 1fr)'}
                templaterows={'repeat(4, 1fr)'}
                gap={'30px'}
                width={'100%'}
                mb={'8px'}
            >
                <NewProductsInfo {...mainPlacement} isMain={true} />
                <NewProductsInfo {...secondaryPlacement} additional={true} />
                <NewProductsInfo {...secondarySecondPlacement} />
            </GridBlock>
        </Flex>
    )
}