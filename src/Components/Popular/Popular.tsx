import React from "react";
import { Btn, BuyBtn } from "../Offer/Btn";
import { FC } from "react";
import { StyledFont20, StyledFont22, Title } from "../Styled/Fonts.styled";
import styled from "styled-components";
import { Flex, StyledFlexContainer } from "../Styled/Flex.styled";

interface ProductItemProps {
    title: string,
    price: string
}

const StyledImg = styled('img')`
    & {
        background-color: #C4C4C4;
        height: 215px;
        width: 205px;
    }
`

const StyledProductItem = styled(StyledFlexContainer)`
    &:not(:last-child) {
        margin-right: 40px;
      }
`

const ProductName = styled(StyledFont22) `
    & {
        padding: 16px 0;
    }
`

const ProductPrice = styled(StyledFont20) `
    & {
        padding-bottom: 81px;
    }
`


export const ProductItem: FC<ProductItemProps> = ({ title, price }): JSX.Element => {
    return (
        <StyledProductItem
            direction={'column'}
            justify={'space-between'}
            padding={'20px'}
            width={'255px'}
        >
            <StyledImg />
            <ProductName>{title}</ProductName>
            <ProductPrice><strong>{price}</strong></ProductPrice>
            <BuyBtn>
                Купить
            </BuyBtn>
        </StyledProductItem>
    )
}

type LinkedProductsArray = Array<ProductItemProps>

const products: LinkedProductsArray = [
    {
        title: 'Сапоги',
        price: '9990 P'
    },
    {
        title: 'Сапоги',
        price: '9990 P'
    },
    {
        title: 'Сапоги',
        price: '9990 P'
    },
    {
        title: 'Сапоги',
        price: '9990 P'
    }
]

export const Popular: FC = () => {
    return (
        <div>
            <Title margin={'48px 0 30px 0'}>Популярное</Title>
            <Flex pb={'48px'}>
                {products.map((product) => {
                    return (
                        <ProductItem
                            title={product.title}
                            price={product.price}
                        />
                    )
                })}
            </Flex>
        </div>
    )
}