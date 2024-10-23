import Image from "next/image";
import React from "react";

type ProblemDescriptionProps = {};

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {
    return (
        <div className=''>
            {/* TAB */}
            <div className='flex   items-center pt-2 text-black overflow-x-hidden'>
                <div className={"bg-gray-200 rounded-md px-5 py-[10px] text-sm cursor-pointer m-2 font-semibold"}>
                    Description
                </div>
            </div>

            <div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
                <div className='px-5'>
                    {/* Problem heading */}
                    <div className='w-full'>
                        <div className='flex space-x-4'>
                            <div className='flex-1 mr-2 text-2xl text-black'>1. Two Sum</div>
                        </div>
                        <div className='flex items-center mt-3'>
                            <div
                                // className={`text-olive bg-[rgba(239, 241, 246, 0.75)] inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
                                className={`text-olive bg-[rgba(239,241,246,0.75)] inline-block rounded-[21px] px-2.5 py-1 text-xs font-medium capitalize`}

                            >
                                Easy
                            </div>
                            <div className='rounded p-[3px] ml-4 text-lg cursor-pointer'>
                                <Image
                                    src={'/check-fill.png'}
                                    height={20}
                                    width={20}
                                    alt='status logo'
                                    className='hover-image'
                                />
                            </div>
                            <div className='rounded p-[3px] ml-4 text-lg cursor-pointer flex flex-row items-center'>
                                <Image
                                    src={'/like.png'}
                                    height={20}
                                    width={20}
                                    alt='like icon'
                                    className='blue-image mr-3'
                                />
                                <span className='text-xs'>120</span>
                            </div>
                            <div className='rounded p-[3px] ml-4 text-lg cursor-pointer flex  flex-row items-center'>
                                <Image
                                    src={'/dislike.png'}
                                    height={20}
                                    width={20}
                                    alt='status logo'
                                    className='mr-3'
                                />
                                <span className='text-xs'>2</span>
                            </div>
                            <div className='rounded p-[3px] ml-4 text-lg cursor-pointer '>
                                <Image
                                    src={'/star.png'}
                                    height={20}
                                    width={20}
                                    alt='star logo'
                                    className=''
                                />
                            </div>
                        </div>

                        {/* Problem Statement(paragraphs) */}
                        <div className='text-black text-sm'>
                            <p className='mt-3'>
                                Given an array of integers <code>nums</code> and an integer <code>target</code>, return
                                <em>indices of the two numbers such that they add up to</em> <code>target</code>.
                            </p>
                            <p className='mt-3'>
                                You may assume that each input would have <strong>exactly one solution</strong>, and you
                                may not use thesame element twice.
                            </p>
                            <p className='mt-3'>You can return the answer in any order.</p>
                        </div>

                        {/* Examples */}
                        <div className='mt-4'>
                            {/* Example 1 */}
                            <div>
                                <p className='font-medium text-black '>Example 1: </p>
                                <div className='example-card'>
                                    <pre>
                                        <strong className='text-black'>Input: </strong> nums = [2,7,11,15], target = 9{" "}
                                        <br />
                                        <strong>Output:</strong> [0,1] <br />
                                        <strong>Explanation:</strong>Because nums[0] + nums[1] == 9, we return [0, 1].
                                    </pre>
                                </div>
                            </div>

                            {/* Example 2 */}
                            <div>
                                <p className='font-medium text-black '>Example 2: </p>
                                <div className='example-card'>
                                    <pre>
                                        <strong className='text-black'>Input: </strong> nums = [3,2,4], target = 6{" "}
                                        <br />
                                        <strong>Output:</strong> [1,2] <br />
                                        <strong>Explanation:</strong>Because nums[1] + nums[2] == 6, we return [1, 2].
                                    </pre>
                                </div>
                            </div>
                            {/* Example 3 */}
                            <div>
                                <p className='font-medium text-black '>Example 3: </p>
                                <div className='example-card'>
                                    <pre>
                                        <strong className='text-black'>Input: </strong> nums = [3,3], target = 6
                                        <br />
                                        <strong>Output:</strong> [0,1] <br />
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* Constraints */}
                        <div className='my-5'>
                            <div className='text-black text-sm font-medium'>Constraints:</div>
                            <ul className='text-black ml-5 list-disc'>
                                <li className='mt-2'>
                                    <code>2 ≤ nums.length ≤ 10</code>
                                </li>

                                <li className='mt-2'>
                                    <code>-10 ≤ nums[i] ≤ 10</code>
                                </li>
                                <li className='mt-2'>
                                    <code>-10 ≤ target ≤ 10</code>
                                </li>
                                <li className='mt-2 text-sm'>
                                    <strong>Only one valid answer exists.</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProblemDescription;