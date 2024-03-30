import React from'react'
import './NewsLetter.css'


const NewsLetter= () => {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Oferrs On Your Email</h1>
            <p>Subscribe to our Website and stay updated</p>
            <div>
                <input type='email' placeholder='Your email id'></input>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter