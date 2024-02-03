import React from 'react'
import Card from '../../../../components/Card/Card';
import Button from '../../../../components/Button/Button';

const NewArrival = ({ products }) => {

    console.log("data", products);
    return (
        <div className='py-[70px] border-b-[1px] border-gray-200 '>
            <h2 className='font-[700] text-[48px] text-center'>
                YENİ GƏLƏNLƏR
            </h2>
            <div className='flex justify-between flex-wrap'>
                {products?.map((product, index) => (
                    <Card data={product} key={index} />
                ))}
            </div>
            <div className='flex justify-center'>
                <Button variant={"outline"} size={"md"} rounded>
                    View All
                </Button>
            </div>
        </div>
    )
}

export default NewArrival