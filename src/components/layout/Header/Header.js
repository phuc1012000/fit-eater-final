import * as HeaderStyle from './header.module.css'
import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Link } from 'gatsby'
import { useState } from 'react'
import { useEffect } from 'react'
import { globalHistory } from '@reach/router'
import { BsFillCartCheckFill, BsFillPersonLinesFill } from 'react-icons/bs'
import { GiReceiveMoney } from 'react-icons/gi'
import { GrLogout } from 'react-icons/gr'
import { Auth } from 'aws-amplify';

const MenuBtn = ({ id }) => {
    const [sidebar, show] = useState(false)

    useEffect(() => {
        return globalHistory.listen(({ action }) => {
            if (action === 'PUSH') {
                show(false)
            }
        })
    })

    return (
        <div id={id}>
            <button onClick={() => { show(true) }} >
                <HiMenuAlt3 size={40} />
            </button>

            <ul className={sidebar ? HeaderStyle.display : HeaderStyle.hidden}>
                <button onClick={() => { show(false) }}>
                    <AiOutlineCloseCircle size={40} />
                </button>
                <li><Link to='/mine'>
                    Thông Tin Cá Nhân
                    <BsFillPersonLinesFill size={30} />
                </Link></li>
                <li><Link to='/cart'>
                    Giỏ Hàng
                    <BsFillCartCheckFill size={30} />
                </Link></li>
                <li><Link to='/mine'>
                    Khuyến Mãi
                    <GiReceiveMoney size={30} />
                </Link></li>
                <li><Link to='/' onClick={() => {Auth.signOut()}}>
                    Đăng Xuất
                    <GrLogout size={30}/>
                </Link></li>
            </ul>
        </div>
    )
}

const Header = (props) => {
    return (
        <header>
            <div id={HeaderStyle.Location}>
                <IoLocationSharp size={30} color='#FF003C' />
                <div >
                    <span>Tìm kiếm tại:</span>
                    <div>
                        Bách Khoa Cơ Sở 1
                    </div>
                </div>
            </div>
            <MenuBtn id={HeaderStyle.MenuBar} />
        </header>
    )
}

export default Header