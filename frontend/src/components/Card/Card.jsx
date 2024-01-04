import React from 'react'

const Card = ({ data }) => {
    const { name, description, price, category } = data

    return (
        <div className='w-[200px] bg-gray-100 my-12'>
            <div className="">
                <img src="" className='h-48 w-full' alt="" />
            </div>
            <div className="card_info">
                <h3 className='text-xl'>
                    {name}
                </h3>
                <p className='text-gray-500 text-sm'>
                    {description}
                </p>
                <span>
                    {price}$
                </span>
                <p>
                    {category}
                </p>
            </div>
        </div>
    )
}

export default Card