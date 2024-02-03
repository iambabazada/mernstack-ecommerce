import React, { useState } from 'react'
import styles from './Header.module.css'
import { addProducts } from '../../redux/productsSlice'
import { useDispatch, useSelector } from 'react-redux'

import Logo from '@src/assets/logo.svg'
import User from '@src/assets/user.svg'
import Cart from '@src/assets/cart.svg'
import { keywordFilter } from '../../redux/generationSlice'
import { Link } from 'react-router-dom'

const Header = () => {

    const dispatch = useDispatch()

    const [products, setProducts] = useState({ name: "", description: "", price: "", stock: "", category: '' })


    const [user, setUser] = useState(false)

    const [keyword, setKeyword] = useState('')

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

    const menu = [
        {
            url: '/products',
            name: "Shop"
        },
        {
            url: '',
            name: "On Sale"
        },
        {
            url: '',
            name: "New Arrivals"
        },
        {
            url: '',
            name: "Brands"
        },
    ]

    const searchChange = (e) => {
        setKeyword(e.target.value)
    }

    const handleSearch = () => {
        dispatch(keywordFilter(keyword))
    }

    return (
        <header>
            <div className={styles.header_container}>
                <div className={styles.brand}>
                    <img src={Logo} alt="" />
                </div>
                <ul className='flex items-center gap-3 font-light '>
                    {menu.map((link) => (
                        <Link key={link.name} to={link.url}>
                            <li >
                                {link.name}
                            </li>
                        </Link>
                    ))}
                </ul>
                <div className={styles.actions}>
                    <div className={styles.search}>
                        <input value={keyword} type="text" onChange={searchChange} placeholder='search' />
                        <button onClick={handleSearch}>
                            axtar
                        </button>
                    </div>
                    <div className={styles.user} onClick={handleUser}>
                        <img src={User} alt="" />
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
                        <img src={Cart} alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header