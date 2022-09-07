import React, { ReactNode } from "react";
import { FC } from "react";
import styled from "styled-components";
import { Flex, StyledFlexContainer } from "./Styled/Flex.styled";
import { StyledFont20, Title } from "./Styled/Fonts.styled";
import { GridBlock } from "./Styled/Grid.styled";

interface PromotialCardProps {
    date: string,
    title: ReactNode
}

export const PromotionalCard: FC<PromotialCardProps> = ({ date, title }): JSX.Element => {
    return (
        <StyledFlexContainer
            direction={'column'}
            justify={'space-between'}
            wrap={'nowrap'}
            padding={'24px'}
            minHeight={'335px'}
        >
            <StyledFont20>{date}</StyledFont20>
            <Title textAlign={'right'}>{title}</Title>
        </StyledFlexContainer>
    )
}

type CardsInfoArray = Array<PromotialCardProps>

const cardsInfo: CardsInfoArray = [
    {
        date: 'до 12.11.2022',
        title: <p>Кэшбэк<br />до 33%</p>
    },
    {
        date: 'до 12.11.2022',
        title: <p>до<strong> -25%</strong><br />на товары <br />для дома</p>
    },
    {
        date: 'до 12.11.2022',
        title: <p>Новая коллекция Timberland</p>
    },
    {
        date: 'до 12.11.2022',
        title: <p>Новые привелегии клуба</p>
    }

]

export const Promotions: FC = () => {
    return (
        <Flex
            direction={'column'}
            wrap={'nowrap'}
        >
            <Title margin={'48px 0 30px 0'}>Акции</Title>
            <GridBlock
                templatecolumns={'repeat(4, 1fr)'}
                templaterows={'repeat(1, 1fr)'}
                gap={'40px'}
                width={'100%'}
                mb={'48px'}

            >
                {cardsInfo.map((item) => {
                    return (
                        <PromotionalCard
                            date={item.date}
                            title={item.title}
                        />
                    )
                })}
            </GridBlock>
        </Flex>
    )
}