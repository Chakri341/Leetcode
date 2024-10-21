'use client'
import { AuthModalAtom } from '@/atoms/AuthModalAtom';
import { app, Auth } from '@/firebase/firebase';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';

type TopbarProps = {

};

const Topbar: React.FC<TopbarProps> = () => {

    const [user, loading1, error1] = useAuthState(Auth);
    const [signOut, loading2, error2] = useSignOut(Auth);
    const router = useRouter();
    const setModalState = useSetRecoilState(AuthModalAtom);
    
    const handleLogout = async () => {

        try {
            const success = await signOut();
            if (success) {
                toast.success("Successfully Logged Out", { position: 'top-center', autoClose: 3000 })
                router.push('/auth')
            }
        } catch (error: any) {
            toast.error(error.message, { position: 'top-center', autoClose: 3000 })
        }
    }

    useEffect(() => {
        if (error1) toast.error(error1.message, { position: 'top-center', autoClose: 3000 })
        if (error2) toast.error(error2.message, { position: 'top-center', autoClose: 3000 })

    }, [error1, error2]);


    return (
        <div className='bg-black flex justify-between'>
            <Image
                src="/newlogo.png"
                width={120}
                height={100}
                alt="Leetcode logo"
                className='p-1 md:ml-10'
            />

            <div className='flex flex-row'>

                {!user && <Link href='/auth'
                    className='bg-white text-black px-2 py-1 sm:px-4 rounded-md text-sm font-medium
            hover:border-2 hover:border-black border-2 border-transparent m-2 transition duration-300 ease-in-out'
                    onClick={() => setModalState((prev) => ({ ...prev, isOpen: true, type: 'login' }))}>
                    Sign In
                </Link>}

                <button
                    className='bg-white text-black  p-1 rounded-md text-sm font-medium
            hover:border-2 hover:border-black border-2 border-transparent m-2 transition duration-300 ease-in-out'
                    onClick={() => console.log("clicked btn")}
                >
                    Buy me a Coffee
                </button>

                {user && <Image
                    src="/avatar.png"
                    width={50}
                    height={50}
                    alt="Leetcode logo"
                    className=' p-2'
                />}

                {user && <div className='bg-white p-1 m-3 rounded-md mx-2'>
                    <button onClick={handleLogout}>
                        <Image
                            src="/logout.png"
                            width={25}
                            height={25}
                            alt="Leetcode logo"
                            className='p-1'
                        />
                    </button>
                </div>}

            </div>
        </div>
    )
}
export default Topbar;