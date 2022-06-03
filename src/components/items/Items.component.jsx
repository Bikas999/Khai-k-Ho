import React from 'react'

import Search from '../search/Search.component';
import Item from '../item/Item.component';

import { useState } from 'react'

import './items.styles.css';

import data from '../../data/items.json';

const Items = () => {
    const [activeItem, setActiveItem] = useState(0);

    return (
        <div className="items">

            <Search />

            <div className="tabs">
                <div className={activeItem === 0 ? "tab active" : 'tab'} onClick={
                    () => setActiveItem(0)
                }>
                    <div className="tab-header-title"
                        onClick={
                            () => setActiveItem(1)
                        }>
                        <h3>All</h3>
                    </div>
                </div>
                <div className={activeItem === 2 ? "tab active" : 'tab'} onClick={
                    () => setActiveItem(2)
                }>
                    <div className="tab-header-title">
                        <h3>Food</h3>
                    </div>
                </div>
                <div className={activeItem === 3 ? "tab active" : 'tab'} onClick={
                    () => setActiveItem(3)
                }>
                    <div className="tab-header-title">
                        <h3>Drink</h3>
                    </div>
                </div>
                <div className={activeItem === 4 ? "tab active" : 'tab'} onClick={
                    () => setActiveItem(4)
                }>
                    <div className="tab-header-title">
                        <h3>Snaks</h3>
                    </div>
                </div>
                <div className={activeItem === 5 ? "tab active" : 'tab'} onClick={
                    () => setActiveItem(5)
                }>
                    <div className="tab-header-title">
                        <h3>Packages</h3>
                    </div>
                </div>
            </div>

            <div className="tab-content">
                <h1>Food</h1>
                {
                    data.map((type, idx) => {
                        return (
                            <div key={idx} >

                                <div className='items-info' >
                                    {
                                        type.items.map((item, idx) => {
                                            return (
                                                <Item
                                                    key={idx}
                                                    name={item.name}
                                                    imgUrl={item.imgUrl}
                                                    price={item.price}
                                                />
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Items