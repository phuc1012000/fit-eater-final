import * as HeaderStyle from './header.module.css'
import React from 'react'
import {IoLocationSharp} from 'react-icons/io5'
import {HiMenuAlt3} from 'react-icons/hi'
import Link from 'gatsby'

const Header = (props) => {
    const Position = [
        { value: 'BK1', label: 'Bách Khoa Cơ Sở 1' },
        { value: 'BK2', label: 'Bách Khoa Cơ Sở 2' },
        { value: 'KTX_A', label: 'Kí Túc Xá Khu A' }
    ]

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
            <HiMenuAlt3 size={40}/> 
        </header>
    )
}

export default Header