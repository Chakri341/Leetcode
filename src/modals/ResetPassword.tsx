import { Auth } from '@/firebase/firebase';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

type LoginProps = {

};

const ResetPassword: React.FC<LoginProps> = () => {

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(Auth);

    const [inputs, setInputs] = useState({
        email: '',
    });

    const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleReset = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputs.email) return alert("Please fill all fields");

        try {
            const success= await sendPasswordResetEmail(inputs.email);
            if (success) {
                toast.success("Password reset email sent", {position:'top-center', autoClose:3000})

            }
        } catch (error:any) {
            toast.error(error.message, {position:'top-center', autoClose:3000})
        }

    }

    useEffect(() => {
        if (error) toast.error(error.message, { position: 'top-center', autoClose: 3000 })

    }, [error]);

    return (
        <div>
            <form className='space-y-6 px-6 pb-4' onSubmit={handleReset}>
                <h3 className='text-xl font-medium text-black'>Reset Password</h3>
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


                <button
                    type='submit'
                    className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
                text-sm px-5 py-2.5 text-center bg-gray-600 hover:bg-gray-700'
                >
                    Reset
                </button>
            </form>
        </div>
    )
}
export default ResetPassword;
