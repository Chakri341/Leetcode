"use client"
import Image from 'next/image';
import React from 'react';
import { useRecoilState } from 'recoil';

import { AuthModalAtom } from '@/atoms/AuthModalAtom';

type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {

    const [AuthModalAtomState, setAuthModalAtomState] = useRecoilState(AuthModalAtom)

    const handleClick = () => {
        console.log("clicked handleClick");
        setAuthModalAtomState({
            isOpen: true,
            type: 'login'
        })
    }

    return (
        <div className='bg-black flex justify-between'>
            <Image
                src="/newlogo.png"
                width={180}
                height={180}
                alt="Leetcode logo"
            />
            <button
                className='bg-white text-black px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:border-2 hover:border-black border-2 border-transparent m-2 transition duration-300 ease-in-out'
                onClick={handleClick}
            >
                Sign In
            </button>
        </div>
    )
}
export default Navbar;