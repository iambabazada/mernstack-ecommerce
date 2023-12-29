import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productsSlice'


const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <main>
            {products?.loading ? (
                <div>
                    loading...
                </div>
            ) : products?.products?.map((product, index) => (
                <div key={index}>
                    <h1>
                        {product?.name}
                    </h1>
                    <span>
                        {product?.price}$
                    </span>
                    <p>
                        {product?.category}
                    </p>
                </div>
            ))}
        </main>
    )
}

export default Home