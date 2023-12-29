import React, { useState } from 'react'
import styles from './Header.module.css'
import { addProducts } from '../../redux/productsSlice'
import { useDispatch } from 'react-redux'

const Header = () => {

    const dispatch = useDispatch()

    const [products, setProducts] = useState({ name: "", description: "", price: "", stock: "", category: '' })

    const [user, setUser] = useState(false)

    const handleUser = () => {
        setUser(!user)
    }

    const onChange = (e) => {
        setProducts({ ...products, [e.target.name]: e.target.value })
        console.log(products);
    }


    const handleCreate = () => {
        dispatch(addProducts({
            name: products.name,
            description: products.description,
            price: products.price,
            stock: products.stock,
            category: products.category
        }))
        console.log(products);
    }

    return (
        <header>
            <div className={styles.header_container}>
                <div className={styles.brand}>
                    e.com
                </div>
                <div className={styles.actions}>
                    <div className={styles.search}>
                        <input type="text" placeholder='search' />
                        <button>
                            axtar
                        </button>
                    </div>
                    <div className={styles.user} onClick={handleUser}>
                        user
                    </div>
                    {user && (
                        <div className='fixed top-20 right-3 bg-slate-200 rounded w-4/6 h-auto'>
                            <form >
                                <input type="text" className='bg-transparent border-[1px] border-white rounded py-1 px-5' placeholder='name' name='name' onChange={onChange} />
                                <input type="text"
                                    className='bg-transparent border-[1px] border-white rounded py-1 px-5' placeholder='description' name='description' onChange={onChange} />
                                <input type="number"
                                    className='bg-transparent border-[1px] border-white rounded py-1 px-5' placeholder='price' name='price' onChange={onChange} />
                                <input type="number"
                                    className='bg-transparent border-[1px] border-white rounded py-1 px-5' placeholder='stock' name='stock' onChange={onChange} />
                                <input type="text" placeholder='category'
                                    className='bg-transparent border-[1px] border-white rounded py-1 px-5' name='category' onChange={onChange} />

                                <button onClick={handleCreate}>
                                    create
                                </button>
                            </form>
                        </div>
                    )}
                    <div className={styles.cart}>
                        cart
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header