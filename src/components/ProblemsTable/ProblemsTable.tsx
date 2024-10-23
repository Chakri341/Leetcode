"use client"
import React, { useEffect, useState } from 'react';
import { problems } from '@/mock problems/mock';
import Image from 'next/image';
import YouTube from 'react-youtube';
import Link from 'next/link';

type ProblemsTableProps = {

};

type YouTubePlayerState = {
    isOpen: boolean;
    videoId: string;
};

const ProblemsTable: React.FC<ProblemsTableProps> = () => {

    const [youtubePlayer, setYoutubePlayer] = useState<YouTubePlayerState>({
        isOpen: false,
        videoId: "",
    });
    const closeModal = () => {
        setYoutubePlayer({ isOpen: false, videoId: "" });
    };

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleEsc);

        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <div>
            <div>
                <h1 className='font-bold text-5xl text-center m-2'>Quality Over Quantity</h1>
            </div>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-10">
                <table className="w-3/4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto mb-10">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                STATUS
                            </th>
                            <th scope="col" className="px-6 py-3">
                                TITLE
                            </th>
                            <th scope="col" className="px-6 py-3">
                                DIFFICULTY
                            </th>
                            <th scope="col" className="px-6 py-3">
                                CATEGORY
                            </th>
                            <th scope="col" className="px-6 py-3">
                                SOLUTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {problems.map((item, index) => {
                            return (
                                <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <td className="px-6 py-4">
                                        <Image
                                            src={index % 2 === 0 ? '/check.png' : '/uncheck.png'}
                                            height={20}
                                            width={20}
                                            alt='status logo'
                                        />
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <Link href={`/problems/${item.id}`}>
                                            {item.title}
                                        </Link>
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.difficulty}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.category}
                                    </td>
                                    <td className="px-6 py-4 cursor-pointer">
                                        {item.videoId ? (
                                            <button onClick={() => setYoutubePlayer({ isOpen: true, videoId: item.videoId as string })}>
                                                <Image
                                                    src={'/youtube.png'}
                                                    height={20}
                                                    width={20}
                                                    alt='status logo'
                                                    className=''
                                                />
                                            </button>
                                        ) : "Coming soon"}
                                    </td>

                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>



            {youtubePlayer.isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative z-10">
                        <YouTube
                            videoId={youtubePlayer.videoId}
                            opts={opts}
                            className="z-0"
                        />
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 p-2 bg-white rounded-full z-20"
                            onClick={closeModal}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 text-black"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.75 9.75l4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProblemsTable;