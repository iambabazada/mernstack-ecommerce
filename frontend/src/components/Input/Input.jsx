import React from 'react'

const Input = ({ placeholder, value, id, name, type, onChange }) => {
    return (
        <input className='w-full border-[1px] border-gray-200 py-1 px-2 rounded' value={value} id={id} onChange={onChange} name={name} type={type} placeholder={placeholder} />
    )
}

export default Input