import React, { FC } from "react";
import { Link } from "../Link";
import { PhoneNumber } from "./PhoneNumber";

interface ArrayMenuElements {
    to: string,
    tittle: string,
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

export const Header: FC = () => {
    return (
        <div className="header--container">
            <div className="logo--container font--base style36">
                <Link
                    to={'/'}
                    title={'Logo'}
                    basicStyle={true}
                />
            </div>
            <div className="links--container font--base style24">
                {menuElements.map((el) => {
                    return (
                        <Link
                            to={el.to}
                            title={el.title}
                            basicStyle={el.basicStyle}
                        />
                    )
                })}
            </div>
            <div className="phone--number--container font--base style24">
                <PhoneNumber
                    number={'+7-999-111-22-33'}
                />
            </div>
        </div>
    )
}