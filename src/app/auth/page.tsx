import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import BottomAuth from './BottomAuth';

type pageProps = {

};

const page: React.FC<pageProps> = () => {

    return (
        <div className='text-center'>
            <Navbar/>
            <BottomAuth/>
        </div>
    )
}
export default page;