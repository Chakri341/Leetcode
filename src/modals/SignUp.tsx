"use client"
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { AuthModalAtom } from '@/atoms/AuthModalAtom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


type LoginProps = {};

const SignUp: React.FC<LoginProps> = () => {

    const setAuthModalState = useSetRecoilState(AuthModalAtom);

    const [inputs, setInputs] = useState({
        email: '',
        name: '',
        password: ''
    });
    const router = useRouter();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(Auth);


    const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleLogin = () => {
        setAuthModalState({
            isOpen: true,
            type: 'login',
        })
    }
    const handleForgetPassword = () => {
        setAuthModalState({
            isOpen: true,
            type: 'reset',
        })
    }

    
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!inputs.email || !inputs.password || !inputs.name) return alert("Please fill all fields");

        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (!newUser) return;
            if (newUser) toast.success("Sucessfully Logged in", { position: 'top-center', autoClose: 3000 });
            router.push('/');
        } catch (error:any) {
            toast.error(error.message, { position: 'top-center', autoClose: 3000 })
 
        }
    }

    useEffect(() => {
        if (error) toast.error(error.message, { position: 'top-center', autoClose: 3000 })

    }, [error]);

    return (
            <form className='space-y-6 px-6 pb-4' onSubmit={handleRegister}>
                <h3 className='text-xl font-medium text-black'>Sign Up to CodeMaster</h3>
                <div>
                    <label htmlFor='email' className='text-sm font-medium mb-2 text-black flex justify-start'>
                        Your Email
                    </label>
                    <input
                        onChange={handleChangeInputs}
                        type='email'
                        name='email'
                        id='email'
                        className='
                            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
                        '
                        placeholder='name@company.com'
                    />
                </div>
                <div>
                    <label htmlFor='name' className='text-sm font-medium mb-2 text-black flex justify-start'>
                        Display Name
                    </label>
                    <input
                        onChange={handleChangeInputs}
                        type='text'
                        name='name'
                        id='name'
                        className='
                            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
                        '
                        placeholder='Name'
                    />
                </div>
                <div>
                    <label htmlFor='password' className='text-sm font-medium  mb-2 text-black flex justify-start'>
                        Your Password
                    </label>
                    <input
                        onChange={handleChangeInputs}
                        type='password'
                        name='password'
                        id='password'
                        className='
                            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
                        '
                        placeholder='*******'
                    />
                </div>

                <button
                    type='submit'
                    className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
                text-sm px-5 py-2.5 text-center bg-gray-600 hover:bg-gray-700'
                >
                    {loading ? "Registering..." : "Register"}
                </button>
                <a href='#' className='flex w-full justify-end' onClick={handleForgetPassword}>
                    <div className='text-sm block  hover:underline w-full text-right'>
                        Forgot Password?
                    </div>
                </a>
                <div className='text-sm font-medium text-gray-500'>
                    Already have an account ?{" "}
                    <a href='#' className='text-blue-700 hover:underline' onClick={handleLogin}>
                        Login
                    </a>
                </div>
            </form>
    )
}

export default SignUp;
