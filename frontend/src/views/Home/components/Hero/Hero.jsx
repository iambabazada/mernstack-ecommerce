import React from 'react'
import HeroImg from '@src/assets/images/hero.png'
import Button from '../../../../components/Button/Button'

const Hero = () => {
    return (
        <div className='relative'>
            <img src={HeroImg} alt="" />
            <div className={"w-1/2 absolute top-24 left-24 flex flex-col gap-4"}>
                <h1 className='text-[64px] uppercase font-[700]'>
                    Stİlİnİzə uyğun paltarları tapın.
                </h1>
                <p className='opacity-50'>Fərdiliyinizi üzə çıxarmaq və üslub duyğusunuzu təmin etmək üçün nəzərdə tutulmuş, diqqətlə hazırlanmış müxtəlif çeşidli geyimlərimizə nəzər salın.</p>
                <div>
                    <Button variant={"primary"} size={"md"} rounded='lg'>
                        Sifariş et
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Hero