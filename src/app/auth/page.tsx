"use client"

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import BottomAuth from './BottomAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';



type pageProps = {

};

const page: React.FC<pageProps> = () => {

    const router = useRouter()
    const [user, loading, error] = useAuthState(Auth);
    const [pageLoading, setpageLoading] = useState(true);


    return (
        <div className='text-center'>
            <Navbar/>
            <BottomAuth/>
        </div>
    )
}
export default page;