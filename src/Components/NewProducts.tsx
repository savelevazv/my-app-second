import React from "react";
import { FC } from "react";

interface NewProductsInfoProps {
    title: string,
    mainDescription?: string,
    description?: string,
    isMain?: boolean,
    additional?: boolean
}

export const NewProductsInfo: FC<NewProductsInfoProps> = ({ title, mainDescription, description, isMain, additional }): JSX.Element => {
    return (
        <div className={isMain ? 'first--style card--container' : additional ? 'second--style card--container' : 'third--style card--container'}>
            <h3 className="font--base style36">{title}</h3>
            <p className="font--base style36">{mainDescription}</p>
            <p className={description ? 'margin--top--description font--base style20' : 'margin--zero'}>{description}</p>
        </div>
    )
}

interface NewProductsProps {
    mainPlacement: NewProductsInfoProps,
    secondaryPlacement: NewProductsInfoProps,
    secondarySecondPlacement: NewProductsInfoProps
}

export const NewProducts: FC<NewProductsProps> = ({ mainPlacement, secondaryPlacement, secondarySecondPlacement }): JSX.Element => {
    return (
        <div className="new--products--container">
            <h2 className="title--new--products font--base style36">Новинки</h2>
            <div className="grid--cards--container">
                <NewProductsInfo {...mainPlacement} isMain={true} />
                <NewProductsInfo {...secondaryPlacement} additional={true} />
                <NewProductsInfo {...secondarySecondPlacement} />
            </div>
        </div>
    )
}