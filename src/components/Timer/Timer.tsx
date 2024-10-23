import Image from "next/image";
import React, { useEffect, useState } from "react";

type TimerProps = {};

const Timer: React.FC<TimerProps> = () => {
    const [showTimer, setShowTimer] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);

    const formatTime = (time: number): string => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds
            }`;
    };

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (showTimer) {
            intervalId = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [showTimer]);

    return (
        <div>
            {showTimer ? (
                <div className='flex items-center space-x-2 bg-dark-fill-3 p-1.5 cursor-pointer rounded hover:bg-dark-fill-2'>
                    <div className="text-white">{formatTime(time)}</div>
                    <button
                        onClick={() => {
                            setShowTimer(false);
                            setTime(0);
                        }}>
                        <Image
                            src="/refresh.png"
                            width={35}
                            height={35}
                            alt="Refresh"
                            className='p-1 bg-white rounded-md cursor-pointer'
                        />
                    </button>
                </div>
            ) : (
                <div
                    className='flex items-center p-1 h-8 hover:bg-dark-fill-3 rounded cursor-pointer'
                    onClick={() => setShowTimer(true)}
                >
                    <Image
                        src="/timer.png"
                        width={35}
                        height={35}
                        alt="Timer"
                        className='p-1 bg-white rounded-md cursor-pointer'
                    />
                </div>
            )}
        </div>
    );
};
export default Timer;