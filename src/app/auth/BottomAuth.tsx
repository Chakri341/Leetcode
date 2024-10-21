"use client"
import Image from "next/image";
import Link from "next/link";
import { AuthModalAtom } from "@/atoms/AuthModalAtom";
import AuthModal from "@/modals/AuthModal";
import { useRecoilValue } from "recoil";


type BottomAuthProps = {}

const BottomAuth: React.FC<BottomAuthProps> = () => {

    const AuthModalAtomState = useRecoilValue(AuthModalAtom);
    



    return (
        <div className="flex flex-col justify-between h-screen ">

            {AuthModalAtomState.isOpen && <AuthModal />}

            <div className="flex justify-center items-center h-4/5 p-8">
                <div className="max-w-md md:max-w-lg lg:max-w-xl text-center">
                    <Image
                        src="/hero.png"
                        width={550}
                        height={550}
                        alt="Hero logo"
                        className="rounded-lg"
                    />
                    <h1 className="text-black text-4xl font-bold mt-8">
                        Welcome to CodeMaster
                    </h1>
                    <p className="text-black mt-4 text-lg">
                        Level up your coding skills with interactive lessons, challenges, and community support.
                    </p>

                </div>
            </div>




            <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* About Section */}
                        <div>
                            <h2 className="text-white text-xl font-semibold mb-4">About CodeMaster</h2>
                            <p className="text-sm">
                                CodeMaster is an online platform to help you enhance your coding skills. With interactive tutorials, challenges, and community-driven content, you can take your programming to the next level.
                            </p>
                        </div>

                        {/* Links Section */}
                        <div>
                            <h2 className="text-white text-xl font-semibold mb-4">Quick Links</h2>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white">Courses</a></li>
                                <li><a href="#" className="hover:text-white">Challenges</a></li>
                                <li><a href="#" className="hover:text-white">Community</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                                <li><a href="#" className="hover:text-white">Pricing</a></li>
                            </ul>
                        </div>

                        {/* Social Media Section */}
                        <div>
                            <h2 className="text-white text-xl font-semibold mb-4">Follow Us</h2>
                            <div className="flex space-x-4 justify-center">
                                <Link href="#" className="hover:text-white">
                                    <svg className="w-6 h-6 fill-current text-gray-300 hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.3 4.3 0 0 0 1.88-2.37c-.84.5-1.76.87-2.75 1.07A4.29 4.29 0 0 0 15.5 4c-2.39 0-4.3 1.94-4.3 4.3 0 .34.04.67.11.99A12.19 12.19 0 0 1 3.2 5.6a4.28 4.28 0 0 0-.58 2.16c0 1.49.76 2.81 1.9 3.58a4.27 4.27 0 0 1-1.95-.54v.05c0 2.08 1.48 3.82 3.45 4.21a4.32 4.32 0 0 1-1.95.07 4.3 4.3 0 0 0 4.02 2.99A8.61 8.61 0 0 1 2 19.55 12.14 12.14 0 0 0 8.07 21c7.74 0 11.98-6.41 11.98-11.98 0-.18 0-.35-.01-.52A8.61 8.61 0 0 0 22.46 6z" />
                                    </svg>
                                </Link>
                                <Link href="#" className="hover:text-white">
                                    <svg className="w-6 h-6 fill-current text-gray-300 hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.04c-5.51 0-9.96 4.46-9.96 9.97 0 4.42 3.65 8.07 8.08 8.07.66 0 1.32-.07 1.96-.21.35-.07.51-.5.26-.8-.26-.32-.76-1.02-1.16-1.56-.4-.54-.77-.98-.97-1.28-.25-.35-.05-.59.25-.66.27-.07.72-.25.86-.29.08-.02.25-.03.38-.02.24.01.49.03.68.04.5.02.95-.03 1.4-.22.46-.19.73-.44.95-.8.21-.37.52-.81.79-1.32.06-.11.21-.34.34-.62.11-.23.04-.44-.18-.58-.34-.21-.94-.47-1.42-.53-.48-.06-1.14-.06-1.73.02a3.13 3.13 0 0 1-.87-.34c-.34-.18-.61-.43-.92-.74-.26-.26-.53-.63-.84-1.15-.14-.23-.35-.55-.4-.64-.05-.09-.23-.03-.33.01-.11.04-.73.29-1.35.45a4.5 4.5 0 0 1-1.65.11c-.33-.04-.47-.19-.41-.47.06-.27.29-.66.57-.99a6.35 6.35 0 0 0 1.19-1.76c.39-.79.77-1.74.85-2.18a5.88 5.88 0 0 1-.1-2.14C9.9 5.8 10.91 5 12 5c.79 0 1.52.32 2.04.84a2.9 2.9 0 0 1 1.07 2.14c0 .61-.1 1.14-.26 1.64.25.03.59.06.91.09.28.02.61.03.88.03.63 0 1.42-.06 2.25-.18.6-.08 1.11-.26 1.47-.53a5.88 5.88 0 0 1-1.22-3.56C19.92 6.5 16.39 2.04 12 2.04z" />
                                    </svg>
                                </Link>
                                <Link href="#" className="hover:text-white">
                                    <svg className="w-6 h-6 fill-current text-gray-300 hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.148 3.267 9.505 7.787 11.043.57.107.783-.247.783-.546 0-.27-.012-1.168-.017-2.12-3.169.688-3.835-1.343-3.835-1.343-.518-1.317-1.266-1.67-1.266-1.67-1.034-.706.078-.692.078-.692 1.145.081 1.748 1.186 1.748 1.186 1.017 1.744 2.665 1.24 3.316.948.103-.738.398-1.24.724-1.527-2.527-.287-5.183-1.263-5.183-5.622 0-1.242.444-2.258 1.173-3.053-.117-.287-.508-1.444.111-3.012 0 0 .952-.303 3.12 1.165a10.82 10.82 0 0 1 2.84-.383c.964.004 1.936.13 2.841.383 2.168-1.468 3.12-1.165 3.12-1.165.621 1.568.23 2.725.113 3.012.732.795 1.173 1.811 1.173 3.053 0 4.37-2.663 5.332-5.198 5.612.412.355.788 1.07.788 2.157 0 1.557-.015 2.818-.015 3.201 0 .303.21.66.79.546C20.737 21.507 24 17.149 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-8 text-gray-500">
                        © {new Date().getFullYear()} CodeMaster. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default BottomAuth;
