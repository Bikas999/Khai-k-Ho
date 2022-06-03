import React from 'react'
import notification from '../../images/Notification Bell.svg'

import './header.styles.css'

const Header = () => {
    return (
        <div className='header-container' >

            <div className='logo'>
                Dazzie
            </div>

            <div className='user-container' >
                <img src={notification} alt='notificaiton-bell' />

                <div className='user'>
                    <div className='user-profile'>
                        <img src='https://media1.popsugar-assets.com/files/thumbor/9IhYxoy8e6UiuizCucT2XL2HT4E/1136x0:4172x3036/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2021/06/07/666/n/24155406/01f4511160be3487e6bf20.09689575_/i/ryan-reynolds-role-model-daughters-mental-health.jpg' alt='user-profile' />
                    </div>

                    <div className='user-info' >
                        <h4>Ryan</h4>
                        <p>Actor</p>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Header