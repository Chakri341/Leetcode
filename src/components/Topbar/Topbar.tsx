// 'use client'
// import { AuthModalAtom } from '@/atoms/AuthModalAtom';
// import { app, Auth } from '@/firebase/firebase';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React, { useEffect } from 'react';
// import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
// import { toast } from 'react-toastify';
// import { useSetRecoilState } from 'recoil';

// type TopbarProps = {
//     problemPage?: boolean,
// };

// const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {

//     const [user, loading1, error1] = useAuthState(Auth);
//     const [signOut, loading2, error2] = useSignOut(Auth);
//     const router = useRouter();
//     const setModalState = useSetRecoilState(AuthModalAtom);

//     const handleLogout = async () => {

//         try {
//             const success = await signOut();
//             if (success) {
//                 toast.success("Successfully Logged Out", { position: 'top-center', autoClose: 3000 })
//                 router.push('/auth')
//             }
//         } catch (error: any) {
//             toast.error(error.message, { position: 'top-center', autoClose: 3000 })
//         }
//     }

//     useEffect(() => {
//         if (error1) toast.error(error1.message, { position: 'top-center', autoClose: 3000 })
//         if (error2) toast.error(error2.message, { position: 'top-center', autoClose: 3000 })

//     }, [error1, error2]);


//     return (
//         <div className='bg-black flex justify-between'>
//             <Image
//                 src="/newlogo.png"
//                 width={120}
//                 height={100}
//                 alt="Leetcode logo"
//                 className='p-1 md:ml-10'
//             />

//             {problemPage &&
//                 <div className='flex flex-row' >
//                     <Link href={'/'} className='flex items-center'>
//                         <Image
//                             src="/left-arrow.png"
//                             width={35}
//                             height={20}
//                             alt="Leetcode logo"
//                             className='p-1 px-2 m-2 bg-white rounded-md'
//                         />
//                     </Link>
//                     <Link href={'/'} className='flex items-center'>
//                         <Image
//                             src="/menu.png"
//                             width={25}
//                             height={4}
//                             alt="Leetcode logo"
//                             className="p-1 my-2 rounded-md"
//                             style={{ filter: 'invert(100%) brightness(200%)' }}
//                         />
//                     </Link>

//                     <h1 className='text-white flex items-center  text-xl'>Problems List</h1>
//                     <Link href={'/'} className='flex items-center'>
//                         <Image
//                             src="/right-arrow.png"
//                             width={35}
//                             height={20}
//                             alt="Leetcode logo"
//                             className=' p-1 px-2 m-2 bg-white rounded-md '
//                         />
//                     </Link>

//                 </div>
//             }

//             <div className='flex flex-row'>

//                 {!user && <Link href='/auth'
//                     className='bg-white text-black px-2 py-1 sm:px-4 rounded-md text-sm font-medium
//             hover:border-2 hover:border-black border-2 border-transparent m-2 transition duration-300 ease-in-out flex items-center'
//                     onClick={() => setModalState((prev) => ({ ...prev, isOpen: true, type: 'login' }))}>
//                     Sign In
//                 </Link>}

//                 {/* <button
//                     className='bg-white text-black  p-1 rounded-md text-sm font-medium
//             hover:border-2 hover:border-black border-2 border-transparent m-2 transition duration-300 ease-in-out flex items-center'
//                     onClick={() => console.log("clicked btn")}
//                 >
//                     Buy me a Coffee
//                 </button> */}

//                 <Image
//                     src="/refresh.png"
//                     width={35}
//                     height={20}
//                     alt="Leetcode logo"
//                     className='p-3  m-2 bg-white rounded-md cursor-pointer'
//                 />

//                 {user && <Image
//                     src="/avatar.png"
//                     width={35}
//                     height={20}
//                     alt="Leetcode logo"
//                     className=' m-2 p-3 cursor-pointer'
//                 />}
//                 {problemPage && user && <Image
//                     src="/timer.png"
//                     width={35}
//                     height={20}
//                     alt="Leetcode logo"
//                     className=' p-1  m-1 bg-white rounded-md cursor-pointer '
//                 />}


//                 {user && <div className='bg-white p-1 m-3 rounded-md mx-2'>
//                     <button onClick={handleLogout}>
//                         <Image
//                             src="/logout.png"
//                             width={35}
//                             height={20}
//                             alt="Leetcode logo"
//                             className='p-2 m-2'
//                         />
//                     </button>
//                 </div>}

//             </div>

//         </div>
//     )
// }
// export default Topbar;


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
import Timer from '../Timer/Timer';

type TopbarProps = {
    problemPage?: boolean,
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {

    const [user, loading1, error1] = useAuthState(Auth);
    const [signOut, loading2, error2] = useSignOut(Auth);
    const router = useRouter();
    const setModalState = useSetRecoilState(AuthModalAtom);

    const handleLogout = async () => {
        try {
            const success = await signOut();
            if (success) {
                toast.success("Successfully Logged Out", { position: 'top-center', autoClose: 3000 });
                router.push('/auth');
            }
        } catch (error: any) {
            toast.error(error.message, { position: 'top-center', autoClose: 3000 });
        }
    };

    useEffect(() => {
        if (error1) toast.error(error1.message, { position: 'top-center', autoClose: 3000 });
        if (error2) toast.error(error2.message, { position: 'top-center', autoClose: 3000 });
    }, [error1, error2]);

    return (
        <div className='bg-black flex justify-between items-center p-2 md:px-10'>
            <Image
                src="/newlogo.png"
                width={120}
                height={100}
                alt="Leetcode logo"
                className='p-1'
            />

            {problemPage && (
                <div className='flex items-center space-x-4'>
                    <Link href='/' className='flex items-center'>
                        <Image
                            src="/left-arrow.png"
                            width={30}
                            height={30}
                            alt="Back"
                            className='p-1 bg-white rounded-md'
                        />
                    </Link>
                    <Link href='/' className='flex items-center'>
                        <Image
                            src="/menu.png"
                            width={30}
                            height={30}
                            alt="Menu"
                            className='p-1 bg-white rounded-md'
                            style={{ filter: 'invert(100%) brightness(200%)' }}
                        />
                    </Link>
                    <h1 className='text-white text-xl'>Problems List</h1>
                    <Link href='/' className='flex items-center'>
                        <Image
                            src="/right-arrow.png"
                            width={30}
                            height={30}
                            alt="Next"
                            className='p-1 bg-white rounded-md'
                        />
                    </Link>
                </div>
            )}

            <div className='flex items-center space-x-4'>
                {!user && (
                    <Link href='/auth'
                        className='bg-white text-black px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:border-black border-2 border-transparent'>
                        Sign In
                    </Link>
                )}

               

                {user && (
                    <>
                        <Image
                            src="/avatar.png"
                            width={35}
                            height={35}
                            alt="Avatar"
                            className='p-1 bg-white rounded-full cursor-pointer'
                        />
                      
                        {problemPage && <Timer/>}
                        <div className='bg-white rounded-md'>
                            <button onClick={handleLogout}>
                                <Image
                                    src="/logout.png"
                                    width={30}
                                    height={30}
                                    alt="Logout"
                                    className='p-2 px-2 cursor-pointer'
                                />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Topbar;
