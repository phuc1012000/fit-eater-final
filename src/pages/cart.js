import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as CartStyle from '../styles/pages/cart.module.css'
import { AiFillCloseCircle, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { useState } from "react";
import { useEffect } from "react";
const Summary = ({ data }) => {
    const get_sum = (val, item) => {
        return val + item.price * item.count
    }

    return (
        <div id={CartStyle.Summary}>
            <div>
                Tổng số tiền <span>{data.reduce(get_sum, 0)} K</span>
            </div>
            <div>

            </div>
        </div>
    )
}


const LongItemCard = ({ data, order, update }) => {
    const set_count = (value) => {
        if (value > 0) {
            var temp = [...data]
            temp[order].count = value
            update(temp)
        }
    }

    const remove_item = () => {
        var temp = [...data]
        temp.splice(order, 1)
        update(temp)
    }
    var item = data[order]
    useEffect(() => {
        item = data[order]
    }, [data])

    return (
        <div className={CartStyle.item}>
            <StaticImage src='../images/xoi.jpg' className={CartStyle.item_img} />
            <div className={CartStyle.item_info}>
                <div>{item.name} </div>
                <div>
                    {item.price * item.count} K
                </div>
            </div>
            <div className={CartStyle.item_count}>
                <AiOutlineArrowDown onClick={() => { set_count(item.count - 1) }} size={25} />
                {item.count}
                <AiOutlineArrowUp onClick={() => set_count(item.count + 1)} size={25} />
            </div>
            <AiFillCloseCircle size={30} onClick={() => remove_item()} />
        </div>
    )
}

const CartPage = () => {
    // const _data = 

    const [data, update] = useState([
        {
            name: 'Xoi Bà Hà',
            price: 15,
            count: 1
        },
        {
            name: 'Xoi Hà',
            price: 15,
            count: 1
        },
        {
            name: 'Xoi ',
            price: 15,
            count: 1
        },
        {
            name: 'Xoi ',
            price: 15,
            count: 1
        },
        {
            name: 'Xoi ',
            price: 15,
            count: 1
        },

        {
            name: 'Xoi ',
            price: 15,
            count: 1
        },
    ])

    return (
        <>
            <div id={CartStyle.List}>{data.map((_, i) => <LongItemCard data={data} order={i} update={update} />)}</div>
            <Summary data={data} />
        </>
    )
}

export default CartPage