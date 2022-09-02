import React from "react";
import { Btn } from "../Offer/Btn";
import { FC } from "react";

interface ProductItemProps {
    title: string,
    price: string
}

export const ProductItem: FC<ProductItemProps> = ({ title, price }): JSX.Element => {
    return (
        <div className="product--item">
            <div className="img">
            </div>
            <p style={{ padding: '16px 0' }} className="font--base style22">{title}</p>
            <p style={{ paddingBottom: '81px' }} className="font--base style20"><strong>{price}</strong></p>
            <Btn isOptional={true}>
                Купить
            </Btn>
        </div>
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
        <div className="container--popular">
            <h2 style={{ margin: '40px 0 30px 0' }} className="font--base style36">Популярное</h2>
            <div className="products--container">
                {products.map((product) => {
                    return (
                        <ProductItem
                            title={product.title}
                            price={product.price}
                        />
                    )
                })}
            </div>
        </div>
    )
}