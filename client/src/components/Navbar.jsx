import React from 'react'
import './css/navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <h4>coinbase</h4>
                </div>
                <ul className="links">
                    <li>Explore</li>
                    <li>Learn</li>
                    <li>Individuals</li>
                    <li>Business</li>
                    <li>Developers</li>
                    <li>Company</li>
                </ul>

                <div className="buttons">
                    <button className='signin'>Sign in</button>
                    <button className='signup'>Sign up</button>
                </div>
            </div>
        </>
    )
}

export default Navbar