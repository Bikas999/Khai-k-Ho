import React from 'react'

import './item.styles.css'

const Item = (props) => {

    return (
        <div className="item">
            <div className="item-image">
                <img src={props.imgUrl} alt="sashimi" />
            </div>
            <div className="item-info">
                <h3>{props.name}</h3>
                <p>{`$${props.price}`}</p>
            </div>

        </div>
    )
}

export default Item