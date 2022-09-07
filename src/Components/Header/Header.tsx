import React, { FC } from "react";
import { Link } from "../Link";
import { PhoneNumber } from "./PhoneNumber";
import { NavigationArrayItem } from "../Categories"
import styled from "styled-components";
import { Flex } from "../Styled/Flex.styled";
import { StyledFont24, Title } from "../Styled/Fonts.styled";


interface ArrayMenuElements extends NavigationArrayItem {
    basicStyle?: boolean
}

type ArrayElements = Array<ArrayMenuElements>

const menuElements = [
    { to: '/', title: 'Товары', basicStyle: true },
    { to: '/', title: 'Услуги', basicStyle: true },
    { to: '/', title: 'Контакты', basicStyle: true },
    { to: '/', title: 'Магазины', basicStyle: true },
    { to: '/', title: 'Новости', basicStyle: true }

]

const HeaderContainer = styled(Flex)`
    & {
        background-color: #F8F7F7;
    }
`

export const Header: FC = () => {
    return (
        <HeaderContainer
            justify={'center'}
            align={'center'}
            width={'100%'}
            height={'100px'}
        >
            <Title>
                <Link
                    to={'/'}
                    title={'Logo'}
                    basicStyle={true}
                />
            </Title>
            <StyledFont24>
                <Flex
                    pl={'90px'}
                    pr={'80px'}
                >
                    {menuElements.map((el) => {
                        return (
                            <Link
                                to={el.to}
                                title={el.title}
                                basicStyle={el.basicStyle}
                            />
                        )
                    })}
                </Flex>
            </StyledFont24>
            <StyledFont24>
                <PhoneNumber
                    number={'+7-999-111-22-33'}
                />
            </StyledFont24>
        </HeaderContainer>
    )
}