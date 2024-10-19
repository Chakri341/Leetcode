import Link from 'next/link';
import React from 'react';

type LoginProps = {

};

const SignUp: React.FC<LoginProps> = () => {

    return (
        <div>
            <form className='space-y-6 px-6 pb-4' >
                <h3 className='text-xl font-medium text-black'>Sign Up to CodeMaster</h3>
                <div>
                    <label htmlFor='email' className='text-sm font-medium mb-2 text-black flex justify-start'>
                        Your Email
                    </label>
                    <input
                        // onChange={}
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
                        // onChange={handleInputChange}
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
                    Login in
                </button>
                <button className='flex w-full justify-end'>
                    <Link href='#' className='text-sm block text-brand-orange hover:underline w-full text-right'>
                        Forgot Password?
                    </Link>
                </button>
                <div className='text-sm font-medium text-gray-300'>
                    Not Registered?{" "}
                    <Link href='#' className='text-blue-700 hover:underline'>
                        Create account
                    </Link>
                </div>
            </form>
        </div>
    )
}
export default SignUp;