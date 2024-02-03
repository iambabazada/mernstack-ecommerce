import React from 'react'
import Brand from '@src/assets/logo.svg'

const Footer = () => {
    return (
        <footer className='flex justify-between py-4 px-[100px]'>
            <div>
                Shop.co © 2000-2024, All Rights Reservedd
            </div>
            <div>
                <img src={Brand} alt="" />
            </div>
        </footer>
    )
}

export default Footer