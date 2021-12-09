import React from "react";
import * as FooterStyle from './Footer.module.css'
import {AiFillHome} from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {IoSearchCircle} from 'react-icons/io5'
import {GiReceiveMoney} from 'react-icons/gi'
import {BsFillCartCheckFill} from 'react-icons/bs'
import { Link } from "gatsby";

const CartBtn = () => {
    return (
        <Link>
        
        </Link>
    )
}

const Footer = () => {
    return (
        <footer>
            <AiFillHome size={30}/>
            <BsFillCartCheckFill size={30}/>
            <IoSearchCircle size={60} />
            <GiReceiveMoney size={30}/>
           <BsFillPersonLinesFill size={30} />
        </footer>
    )
}

export default Footer