"use client";

import Image from 'next/image';
import React from 'react';
import Login from './Login';
import ResetPassword from './ResetPassword';
import SignUp from './SignUp';

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {

    const handleCloseBtn = () => {
        console.log("handleCloseBtn")
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 w-full ">
            <div className="bg-white w-1/2 md:w-1/4 p-6 rounded-lg">

                <div className='flex justify-end'>
                    <button onClick={handleCloseBtn}>
                        <Image
                            src="/close-button.png"
                            width={20}
                            height={20}
                            alt="Leetcode logo"
                        />
                    </button>
                </div>
                {/* <Login/> */}
                {/* <ResetPassword/> */}
                <SignUp/>
               
            </div>
        </div>
    );
};

export default AuthModal;




