import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../redux/productsSlice'
import Button from '@src/components/Button/Button'

import styles from './ProductDetail.module.css'

const ProductDetail = () => {
    const { id } = useParams()

    const dispatch = useDispatch()

    const product = useSelector((state) => state.products.product)

    useEffect(() => {
        dispatch(getProduct(id))
    }, [id])


    return (
        <main className='max-w-[1440px] mx-auto px-[100px]'>
            <div className='flex justify-between'>
                <div className='w-1/2'>
                    <img src="" alt="" />
                </div>
                <div className='w-1/2 flex flex-col gap-2'>
                    <h3 className={styles.product_title}>
                        {product?.name}
                    </h3>
                    <span className={styles.product_price}>
                        ${product?.price}
                    </span>
                    <p className={styles.product_description}>
                        {product?.description}
                    </p>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-2'>
                            <button className='w-8 h-8 flex items-center justify-center p-2 border-[1px] text-gray-500 border-gray-100'>-</button>
                            <span className='w-8 h-8 flex items-center justify-center p-2 border-[1px] text-gray-500 border-gray-100'>
                                1
                            </span>
                            <button className='w-8 h-8 flex items-center justify-center p-2 border-[1px] text-gray-500 border-gray-100'>+</button>
                        </div>
                        <div>
                            <Button variant="primary" size="md" rounded>
                                add basket
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductDetail