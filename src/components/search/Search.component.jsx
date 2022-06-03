import React from 'react'

import SEARCH from '../../images/SEARCH.svg'

import './search.style.css'

const Search = () => {
    return (
        <div className="search">
            <div className="search__icon">
                <img src={SEARCH} alt="search" />
            </div>
            <div className="search__input">
                <input type="text" placeholder="Search" />
            </div>
        </div>

    )
}

export default Search