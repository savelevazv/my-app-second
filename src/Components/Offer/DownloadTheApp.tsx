import React from "react";
import { Btn } from "./Btn";
import { FC } from "react";
import styled from "styled-components";
import { Title } from "../Styled/Fonts.styled";
import { Flex, StyledFlexContainer } from "../Styled/Flex.styled";

const BtnContainer = styled(Flex)`
    & {
        gap: 17px;
    }
`


export const DownloadTheApp: FC = () => {
    return (
        <StyledFlexContainer
            direction={'column'}
            justify={'space-around'}
            align={'flex-end'}
            padding={'45px 40px 48px 0'}
            width={'55%'}

        >
            <Title textAlign={'right'}>
                Установите наше<br />мобильное приложение
            </Title>
            <BtnContainer
                direction={'column'}
                pl={'40px'}
                mt={'40px'}
            >
                <Btn onClick={e => { e.preventDefault(); console.log(e) }}>
                    AppStore
                </Btn>
                <Btn onClick={e => { e.preventDefault(); console.log(e) }}>
                    Google Play
                </Btn>
            </BtnContainer>
        </StyledFlexContainer>
    )
}