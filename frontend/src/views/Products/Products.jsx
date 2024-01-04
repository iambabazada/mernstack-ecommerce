import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productsSlice'
import Card from '../../components/Card/Card'

const Products = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    const keyword = useSelector((state) => state.keyword)

    const [price, setPrice] = useState({ min: 0, max: 30000 })

    const categorys = [
        "men",
        "woman",
        "children",
        "Shoes",
        "bag"
    ]

    const [categories, setCategories] = useState()
    console.log(categories);

    useEffect(() => {
        dispatch(getProducts(keyword, categories))
    }, [dispatch, keyword, categories])


    return (
        <main className='max-w-[1440px] mx-auto px-[100px] flex '>
            <div className='w-[300px] border-r-[1px] border-gray-100'>
                <div className="price">
                    <label htmlFor="">Qiymət</label>
                    <div className="flex gap-2">
                        <input type="text" onChange={(e) => setPrice(prev => ({ ...prev, min: e.target.value }))} placeholder='min' className='w-[50px] border-[1px] border-gray-100 rounded px-2 py-1' />
                        <input type="text" onChange={(e) => setPrice(prev => ({ ...prev, max: e.target.value }))} placeholder='max' className='w-[50px] border-[1px] border-gray-100 rounded px-2 py-1' />
                    </div>
                </div>
                <div className="categorys">
                    {categorys?.map((category, index) => (
                        <div key={index} onClick={() => setCategories(category)}>
                            {category}
                        </div>
                    ))}
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