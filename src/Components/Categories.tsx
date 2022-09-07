import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { FC } from "react";
import { LinksStyled } from "./Link";
import { StyledFont20, Title } from "./Styled/Fonts.styled";
import styled from "styled-components";
import { Flex, StyledFlexContainer } from "./Styled/Flex.styled";

export const CategoriesElement: FC<NavigationArrayItem> = ({ to, title }): JSX.Element => {
    return (
        <StyledFlexContainer
            padding={'14px 27px'}
            mr={'32px'}
            mb={'20px'}
        >
            <StyledFont20>
                <LinksStyled href={to}>{title}</LinksStyled>
            </StyledFont20>
        </StyledFlexContainer>
    )
}

export interface NavigationArrayItem {
    to: string,
    title: string
}

type LinkedArray = Array<NavigationArrayItem>

const elements: LinkedArray = [
    {
        to: '/',
        title: 'Обувь'
    },
    {
        to: '/',
        title: 'Ремни'
    },
    {
        to: '/',
        title: 'Очки'
    },
    {
        to: '/',
        title: 'Сумки'
    },
    {
        to: '/',
        title: 'Аксессуары'
    },
    {
        to: '/',
        title: 'Бренды'
    },
    {
        to: '/',
        title: 'Новинки'
    },
    {
        to: '/',
        title: 'Домашние товары'
    },
    {
        to: '/',
        title: 'Товары для красоты'
    },
]

const CategoriesComment = styled(StyledFont20)`
    & {
        margin-bottom: 36px;
    }
`

export const Categories: FC = () => {
    return (
        <div className="categories--container">
            <Title margin={'48px 0 20px 0'}>Категории</Title>
            <CategoriesComment>*Выберите категорию, чтобы перейти в раздел магазина</CategoriesComment>
            <Flex
                direction={'row'}
                justify={'flex-start'}
                wrap={'wrap'}
                mb={'28px'}
            >
                {elements.map((el) => {
                    return (
                        <CategoriesElement
                            to={el.to}
                            title={el.title}
                        />
                    )
                })}
            </Flex>
        </div>
    )
}