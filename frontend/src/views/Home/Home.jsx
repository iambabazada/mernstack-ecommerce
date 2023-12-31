import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productsSlice'
import Card from '../../components/Card/Card'


const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    const keyword = useSelector((state) => state.keyword)

    useEffect(() => {
        dispatch(getProducts(keyword))
    }, [dispatch, keyword])
    console.log(keyword);


    return (
        <main className='max-w-[1440px] mx-auto px-[100px]'>
            <div className='flex items-center justify-between flex-wrap'>
                {products?.loading ? (
                    <div>
                        loading...
                    </div>
                ) : products?.products?.map((product, index) => (
                    <Card key={index} data={product} />
                ))}
            </div>
        </main>
    )
}

export default Home