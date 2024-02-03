import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Card = ({ data }) => {
    const { name, description, price, category, _id } = data

    const navigation = useNavigate()

    console.log(_id);

    return (
        <Link to={`product/${_id}`} className='w-[250px] my-12'>
            <div className="bg-gray-100 rounded-md">
                <img src="" className='h-56 w-full rounded-md' alt="" />
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
            </div>
        </Link>
    )
}

export default Card