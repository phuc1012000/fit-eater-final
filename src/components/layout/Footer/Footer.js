import React from "react";
import * as FooterStyle from './Footer.module.css'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { IoSearchCircle } from 'react-icons/io5'
import { GiReceiveMoney } from 'react-icons/gi'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { Link } from "gatsby";
import { globalHistory } from '@reach/router'
import { useEffect } from "react";
import { useState } from "react";
import IndexPage from "../../../pages";

const CartBtn = ({page_path}) => {
    return (
        <Link to='/cart' className={page_path === 'cart' ? FooterStyle.active : ''}>
            <BsFillCartCheckFill size={30} />
        </Link>
    )
}

const HomeBtn = ({page_path}) => {
    return (
        <Link to='/' className={page_path === '' ? FooterStyle.active : ''} >
            <AiFillHome size={30} />
        </Link>
    )
}

const get_current_path = () => {
    const url_tokens = window.location.href.split('/')
    return url_tokens[url_tokens.length-1]
}

const Footer = () => {
    const [page_path, set_path] = useState(get_current_path())

    useEffect(() => {
        return globalHistory.listen(({ action }) => {
            if (action === 'PUSH') {
                set_path(get_current_path())
            }
        })
    })

    return (
        <footer>
            <HomeBtn page_path={page_path}/>
            <CartBtn page_path={page_path}/>
            <IoSearchCircle size={60} />
            <GiReceiveMoney size={30} />
            <BsFillPersonLinesFill size={30} />
        </footer>
    )
}

export default Footer