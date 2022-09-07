import React, { ReactNode } from "react";
import { FC } from "react";
import styled from "styled-components";
import { StyledFont20 } from "./Styled/Fonts.styled";
import { GridBlock } from "./Styled/Grid.styled";

interface InfoElementProps {
    title: string,
    children?: ReactNode
}

const InfoTitle = styled('p')`
    & {
        padding-bottom: 20px;
    }
`

export const InfoElement: FC<InfoElementProps> = ({ title, children }): JSX.Element => {
    return (
        <StyledFont20>
            <InfoTitle>{title}</InfoTitle>
            {children}
        </StyledFont20>
    )
}

type LinkedInformationElement = Array<InfoElementProps>

const informationElements: LinkedInformationElement = [
    {
        title: 'Доставка на следующий день',
        children: <>В Москве и 60 других крупных городах России вы получите свой заказ уже на следующий день! Более подробную информацию об условиях доставки в ваш город можно найти здесь.</>
    },
    {
        title: 'Примерка перед покупкой',
        children: <>Интернет-магазин даёт<br />возможность примерить<br />одежду, обувь и другие товары<br />перед оплатой заказа курьеру.<br />Оплачивайте только то, что <br />вам подошло и понравилось!</>
    },
    {
        title: 'Удобные способы оплаты',
        children: <>Вы можете оплатить покупки<br />не только наличными, но и<br />банковской картой. У всех<br />курьеров при себе есть<br />терминал для оплаты картами.</>
    }
]

export const Info: FC = () => {
    return (
        <GridBlock
            templatecolumns={'repeat(3, 1fr)'}
            gap={'80px'}
            padding={'78px 20px'}
        >
            {informationElements.map((el) => {
                return (
                    <InfoElement title={el.title}>
                        {el.children}
                    </InfoElement>
                )
            })}
        </GridBlock>
    )
}