import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';
import { AuthModalAtom } from '@/atoms/AuthModalAtom';
import { Auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


type LoginProps = {

};

const Login: React.FC<LoginProps> = () => {

    const setAuthModalState = useSetRecoilState(AuthModalAtom);
    const router = useRouter();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(Auth);

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSignUp = () => {
        setAuthModalState({
            isOpen: true,
            type: 'signup',
        })
    }
    const handleForgetPassword = () => {
        setAuthModalState({
            isOpen: true,
            type: 'reset',
        })
    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputs.email || !inputs.password) return alert("Please fill all fields");

        try {
            const newUser = await signInWithEmailAndPassword(inputs.email, inputs.password);
            if (newUser) {
                if (newUser) toast.success("Sucessfully Logged in", { position: 'top-center', autoClose: 3000 });
                router.push('/');
            }

        } catch (error:any) {
            toast.error("Invalid Credentials", { position: 'top-center', autoClose: 3000 })
        }
    }

    useEffect(() => {
        if (error) toast.error(error.message, { position: 'top-center', autoClose: 3000 })

    }, [error]);

    return (
        <div>
            <form className='space-y-6 px-6 pb-4' onSubmit={handleLogin} >
                <h3 className='text-xl font-medium text-black'>Sign in to CodeMaster</h3>
                <div>
                    <label htmlFor='email' className='text-sm font-medium mb-2 text-black flex justify-start'>
                        Your Email
                    </label>
                    <input
                        onChange={handleInputsChange}
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
                    <label htmlFor='password' className='text-sm font-medium  mb-2 text-black flex justify-start'>
                        Your Password
                    </label>
                    <input
                        onChange={handleInputsChange}
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
                    {loading ? "Logging...." : "Login in"}
                </button>
                <a href='#' className='flex w-full justify-end' onClick={handleForgetPassword}>
                    <div className='text-sm block text-brand-orange hover:underline w-full text-right'>
                        Forgot Password?
                    </div>
                </a>
                <div className='text-sm font-medium text-gray-300'>
                    Not Registered?{" "}
                    <a href='#' className='text-blue-700 hover:underline' onClick={handleSignUp}>
                        Create account
                    </a>
                </div>
            </form>
        </div>
    )
}
export default Login;