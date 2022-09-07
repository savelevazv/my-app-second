import React from "react";
import { Btn } from "./Btn";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { FC } from "react";
import { Flex } from "../Styled/Flex.styled";
import styled from "styled-components";
import { StyledFont24 } from "../Styled/Fonts.styled";
import { GridBlock } from "../Styled/Grid.styled";


const SubscriptionTitle = styled(StyledFont24)`
    & {
        display: block;
        text-align: center;
    }
`

export const Subscription: FC = () => {
    return (
        <GridBlock 
            gap={'16px'}
            padding={'45px 27px 58px 27px'}
            mr={'23px'}
        >
            <SubscriptionTitle>
                Получите дополнительную скидку<br />
                <strong>10% на любой заказ</strong>
            </SubscriptionTitle>
            <Input
                type={'text'}
                placeholder='Укажите e-mail для рассылки'
                id={'email'}
            />
            <Flex
                align={'center'}
                pl={'20px'}
            >
                <Checkbox
                    type={'checkbox'}
                    id={'check'}
                    title={'Создать учетную запись'}
                />
            </Flex>
            <Flex justify={'space-between'}>
                <Btn onClick={e => { e.preventDefault(); console.log(e) }}>
                    Для неё
                </Btn>
                <Btn onClick={e => { e.preventDefault(); console.log(e) }}>
                    Для него
                </Btn>
            </Flex>
        </GridBlock>
    )
}