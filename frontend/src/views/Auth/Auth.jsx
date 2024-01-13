import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import Button from '@src/components/Button/Button'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/user'

const Auth = () => {
    const [signUp, setSignUp] = useState(true)
    const [data, setData] = useState({ name: '', email: '', password: '' })

    const dispatch = useDispatch()

    const onChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
        console.log(data);
    }

    const registerFunc = () => {
        dispatch(register(data))
    }

    const loginFunc = () => {

    }

    return (
        <main className='h-screen flex items-center justify-center'>
            <div className='w-1/3 shadow-md p-12 mx-auto flex flex-col gap-4'>
                <div className='text-4xl text-center'>
                    {signUp ? 'Qeydiyyatdan kec' : 'Daxil ol'}
                </div>
                {signUp && (
                    <Input type={"text"} name={"name"} id={"name"} onChange={onChange} placeholder={"name"} value={data.name} />
                )}
                <Input type={"email"} onChange={onChange} name={"email"} id={"email"} placeholder={"email"} value={data.email} />
                <Input type={"password"} onChange={onChange} name={"password"} id={"password"} placeholder={"password"} value={data.password} />
                <div>
                    <Button onClick={signUp ? registerFunc : loginFunc} variant={'primary'} rounded className="w-full" size="md">
                        {signUp ? 'Qeydiyyatdan kec' : 'Daxil ol'}
                    </Button>
                </div>
            </div>
        </main>
    )
}

export default Auth