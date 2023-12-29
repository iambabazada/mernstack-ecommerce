import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productsSlice'
import Card from '../../components/Card/Card'


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
                <Card key={index} data={product} />
            ))}
        </main>
    )
}

export default Home