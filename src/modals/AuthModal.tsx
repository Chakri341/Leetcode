"use client";

import Image from 'next/image';
import React from 'react';
import Login from './Login';
import ResetPassword from './ResetPassword';
import SignUp from './SignUp';
import { useRecoilState } from 'recoil';
import { AuthModalAtom } from '@/atoms/AuthModalAtom';

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
    
    const [AuthModalAtomState, setAuthModalAtomState] = useRecoilState(AuthModalAtom)

    const handleCloseBtn = () => {
        console.log("handleCloseBtn");
        setAuthModalAtomState({
            isOpen:false,
            type:'login'
        })
    }

    return (
        <div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50 w-full ">
            <div className="bg-white w-1/2 md:w-1/4 p-6 rounded-lg">

                <div className='flex justify-end'>
                    <button onClick={handleCloseBtn}>
                        <Image
                            src="/close-button.png"
                            width={15}
                            height={15}
                            alt="close logo"
                        />
                    </button>
                </div>
                
                {AuthModalAtomState.isOpen && AuthModalAtomState.type==="login" && <Login/>}
                {AuthModalAtomState.isOpen && AuthModalAtomState.type==="signup" && <SignUp/>}
                {AuthModalAtomState.isOpen && AuthModalAtomState.type==="reset" && <ResetPassword/>}
               
            </div>
        </div>
    );
};

export default AuthModal;




