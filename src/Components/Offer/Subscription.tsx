import React from "react";
import { Btn } from "./Btn";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { FC } from "react";

export const Subscription: FC = () => {
    return (
        <div className="subscriprion--container">
            <p style={{ textAlign: 'center', display: 'block' }} className="font--base style24">Получите дополнительную скидку<br />
                <strong>10% на любой заказ</strong>
            </p>
            <Input
                type={'text'}
                placeholder='Укажите e-mail для рассылки'
                id={'email'}
            />
            <div className="checkbox--container">
                <Checkbox
                    type={'checkbox'}
                    id={'check'}
                    title={'Создать учетную запись'}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Btn onClick={e => { e.preventDefault(); console.log(e) }}>
                    Для неё
                </Btn>
                <Btn onClick={e => { e.preventDefault(); console.log(e) }}>
                    Для него
                </Btn>
            </div>
        </div>
    )
}