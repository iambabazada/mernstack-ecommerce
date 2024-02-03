import React from 'react'

import CategoryImg1 from '@src/assets/images/category1.png'
import CategoryImg2 from '@src/assets/images/category2.png'
import CategoryImg3 from '@src/assets/images/category3.png'
import CategoryImg4 from '@src/assets/images/category4.png'

const Categorys = () => {

    const categorys = [
        {
            img: CategoryImg1,
            name: "men"
        },
        {
            img: CategoryImg2,
            name: "woman"
        },
        {
            img: CategoryImg3,
            name: "children"
        },
        {
            img: CategoryImg4,
            name: "Shoes"
        },
    ]
    return (
        <div className='max-w-[1260px] mx-auto my-10 h-auto bg-gray-100 py-[70px] px-[70px] '>
            <h3 className='text-[48px] font-[700] mb-12 text-center'>
                Geyim tərzinə görə GÖZ EDİN
            </h3>
            <div className='flex flex-wrap justify-between'>
                {categorys?.map((category, index) => (
                    <div key={index}>
                        <img src={category.img} alt="" />
                        {category.name}
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Categorys