import React from 'react'

import './editproduct.styles.css'

const EditProduct = () => {
    return (
        <div className="edit-container">
            <h1>Edit Product</h1>
            <div className="edit-form">
                <div class='edit-item'>
                    <label>ID</label>
                    <input className='edit-input' type="text" name="id" />
                </div>
                <div className="select-picture">
                    <h3>Select Your Product Picture</h3>
                    <button className='btn'>
                        Browse
                    </button>
                </div>
                <div class='edit-item'>
                    <label>Product Name</label>
                    <input className='edit-input' type="text" name="id" />
                </div>
                <div class='edit-item'>
                    <label>Category</label>
                    <input className='edit-input' type="text" name="id" />
                </div>
                <div class='edit-item'>
                    <label>Price</label>
                    <input className='edit-input' type="text" name="id" />
                </div>
                <div class='edit-item'>
                    <label>Description</label>
                    <input className='edit-des' type="text" name="id" />
                </div>


            </div>
            <div className="edit-btn">
                <button className='btn'>
                    Save
                </button>
                <h4>Cancel</h4>
            </div>
        </div>
    )
}

export default EditProduct