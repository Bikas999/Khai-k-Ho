import React from 'react'
import { useLocation } from 'react-router-dom';


import { ReactComponent as User } from '../../images/user.svg';
import { ReactComponent as Orders } from '../../images/orders.svg';
import { ReactComponent as Coupon } from '../../images/CouponDiscount.svg';
import { ReactComponent as Customer } from '../../images/customer.svg';
import { ReactComponent as Package } from '../../images/Package.svg';
import { ReactComponent as Seettings } from '../../images/seettings.svg';
import { ReactComponent as Square } from '../../images/square.svg'

import './sidebar.styles.css'

import { Link } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    return (
        <div className='sidebar'>


            <div className='menu-items'>
                <Link to='/'>
                    <div className={location.pathname === "/" ? "menu-item active" : "menu-item"} >
                        <Square className='menu-image' />
                    </div>
                </Link>

                <div className='menu-item'>
                    <Orders className='menu-image' />

                </div>
                <div className='menu-item'>
                    <Customer className='menu-image' />

                </div>
                <Link to='/edit'>
                    <div className={location.pathname === "/edit" ? "menu-item active" : "menu-item"}>
                        <Package className='menu-image' />

                    </div>
                </Link>
                <div className='menu-item'>
                    <Coupon className='menu-image' />

                </div>
                <div className='menu-item'>
                    <User className='menu-image' />
                </div>

            </div>

            <div className='setting'>
                <Seettings />
            </div>

        </div>
    )
}

export default Sidebar