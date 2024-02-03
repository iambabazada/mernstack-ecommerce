import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productsSlice'
import Card from '../../components/Card/Card'

import ArrowIcon from '@src/assets/arrow.svg'

const Products = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    const keyword = useSelector((state) => state.keyword.keyword)

    const [price, setPrice] = useState({ min: 0, max: 30000 })

    const categorys = [
        "men",
        "woman",
        "children",
        "Shoes",
        "bag"
    ]

    const [category, setCategory] = useState()
    console.log(category);

    useEffect(() => {
        console.log("filter", category, keyword);
        dispatch(getProducts({ keyword, category, price }))
    }, [dispatch, keyword, category, price])


    return (
        <main className='max-w-[1440px] mx-auto px-[100px] flex '>
            <div>
                <div className='w-[300px]  shadow-sm h-auto py-4 px-6 rounded '>
                    <div className="flex gap-2 items-center">
                        <label htmlFor="">Qiymət</label>
                        <div className="flex gap-2">
                            <input type="text" onChange={(e) => setPrice(prev => ({ ...prev, min: e.target.value }))} placeholder='min' className='w-[50px] border-[1px] border-gray-100 rounded px-2 py-1' />
                            <input type="text" onChange={(e) => setPrice(prev => ({ ...prev, max: e.target.value }))} placeholder='max' className='w-[50px] border-[1px] border-gray-100 rounded px-2 py-1' />
                        </div>
                    </div>
                    <div className="mt-4 flex cursor-pointer flex-col gap-2 opacity-70">
                        {categorys?.map((category, index) => (
                            <div key={index} className='flex justify-between ' onClick={() => setCategory(category)}>
                                {category}
                                <img src={ArrowIcon} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between flex-wrap gap-6 px-4'>
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

export default Products