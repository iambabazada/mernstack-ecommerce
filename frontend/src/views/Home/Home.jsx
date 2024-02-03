import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productsSlice'
import Card from '../../components/Card/Card'
import Hero from './components/Hero/Hero'
import NewArrival from './components/NewArrival/NewArrival'
import Categorys from './components/Categorys/Categorys'


const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)


    const keyword = useSelector((state) => state.keyword)

    useEffect(() => {
        dispatch(getProducts(keyword))
    }, [dispatch, keyword])
    console.log(keyword);


    return (
        <main className='max-w-[1440px] mx-auto '>
            <Hero />
            <div className='px-[100px]'>
                <NewArrival products={products?.products} />
            </div>
            <Categorys />
        </main>
    )
}

export default Home