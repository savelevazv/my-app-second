import React from "react";
import { Link } from "./Link";
import { NavigationArrayItem } from "./Categories";
import { FC } from "react";
import styled from "styled-components";
import { StyledFont16, StyledFont20 } from "./Styled/Fonts.styled";
import { GridBlock } from "./Styled/Grid.styled";


type LinkedArrayFooter = Array<NavigationArrayItem>

const footerElements: LinkedArrayFooter = [
    {
        to: '/',
        title: 'Статус заказа по номеру'
    },
    {
        to: '/',
        title: 'Центр поддержки'
    },
    {
        to: '/',
        title: 'Как оформить заказ'
    },
    {
        to: '/',
        title: 'Как выбрать размер'
    },
    {
        to: '/',
        title: 'Условия доставки'
    },
    {
        to: '/',
        title: 'Мои заказы'
    },
    {
        to: '/',
        title: 'Возврат'
    },
    {
        to: '/',
        title: 'Публичная оферта'
    },
    {
        to: '/',
        title: 'Программа лояльности'
    },
    {
        to: '/',
        title: 'Частозадаваемные вопросы'
    },
    {
        to: '/',
        title: 'Исследования'
    }
]

interface FooterBlockProps {
    title: string
}

interface FooterProps {
    firstBlock: FooterBlockProps,
    secondBlock: FooterBlockProps,
    thirdBlock: FooterBlockProps
}

const TitleFooterList = styled(StyledFont20)`
    & {
        padding-Bottom: 16px;
    }
`

export const FooterBlock: FC<FooterBlockProps> = ({ title }): JSX.Element => {
    return (
        <div className="footer--list">
            <TitleFooterList>
                <strong>{title}</strong>
            </TitleFooterList>
            <StyledFont16>
                {footerElements.map((el) => {
                    return (
                        <Link
                            to={el.to}
                            title={el.title}
                        />
                    )
                })}
            </StyledFont16>
        </div>
    )
}

const FooterListContainer = styled('div') `
    & {
        margin: 69px 0 38px 0;
    }
`

export const Footer: FC<FooterProps> = ({ firstBlock, secondBlock, thirdBlock }): JSX.Element => {
    return (
        <FooterListContainer>
            <GridBlock 
                templatecolumns={'repeat(3, 1fr)'}
            >
                <FooterBlock {...firstBlock} />
                <FooterBlock {...secondBlock} />
                <FooterBlock {...thirdBlock} />
            </GridBlock>
        </FooterListContainer>
    )
}