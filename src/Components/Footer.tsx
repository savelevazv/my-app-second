import React from "react";
import { Link } from "./Link";
import { FC } from "react";

interface ArrayFooter {
    to: string,
    title: string
}

type LinkedArrayFooter = Array<ArrayFooter>

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

export const FooterBlock: FC<FooterBlockProps> = ({ title }): JSX.Element => {
    return (
        <div className="footer--list">
            <p style={{ paddingBottom: '16px' }} className="font--base style20">
                <strong>{title}</strong>
            </p>
            <div className="font--base style16">
                {footerElements.map((el) => {
                    return (
                        <Link
                            to={el.to}
                            title={el.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export const Footer: FC<FooterProps> = ({ firstBlock, secondBlock, thirdBlock }): JSX.Element => {
    return (
        <div style={{ margin: '68px 0 38px 0' }}>
            <div className="footer--list--container">
                <FooterBlock {...firstBlock} />
                <FooterBlock {...secondBlock} />
                <FooterBlock {...thirdBlock} />
            </div>
        </div>
    )
}