import React, { useState, useEffect } from 'react'
import './css/fetchdata.css'

const FetchData = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/list/all', {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
            }
        })

        const responseData = await response.json()
        setData(responseData.message.hound)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="fetchgData">
                <div className="apiData">
                    <div className="header">
                        <h3>Here is the list of Hound Dogs</h3>
                    </div>
                    <div className="data">
                        <ul>
                            {
                                data && data.map((dogs) => (
                                    <ul>{dogs}</ul>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FetchData