import React, { useEffect, useState } from 'react'
import './css/home.css'

export const Home = () => {

    return (
        <div className="home">
            <div className="box">
                <div className="left">
                    <div className="content">
                        <img src="./content.webp" alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="right_content">

                        <div className="heading">
                            <h1>
                                The future of money is here
                            </h1>
                        </div>
                        <div className="subHeading">
                            <p>
                                We're the most trusted place for people and businesses to buy, sell, and manage crypto.
                            </p>
                        </div>
                        <div className="form">
                            <label htmlFor="">Email Address</label>
                            <div className="textField">
                                <input type="text" placeholder='karanpal03040@gmail.com' name="" id="" />
                                <button>Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
