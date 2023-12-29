import React from 'react'

const Card = ({ data }) => {
    const { title, description, price } = data

    return (
        <div>
            <div className="card_img">
                <img src="" alt="" />
            </div>
            <div className="card_info">
                <h3>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
                <span>
                    {price}$
                </span>
            </div>
        </div>
    )
}

export default Card