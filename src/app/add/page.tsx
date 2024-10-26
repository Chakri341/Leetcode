"use client";
import React, { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { firestore } from '@/firebase/firebase';
type FormData = {
    category: string;
    difficulty: string;
    id: string;
    title: string;
    videoId: string;
    link: string;
    stringType: string;
    likes: number;
    dislikes: number;
    order: number;
};

type PageProps = {};

const Page: React.FC<PageProps> = () => {
    const [formData, setFormData] = useState<FormData>({
        category: '',
        difficulty: '',
        id: '',
        title: '',
        videoId: '',
        link: '',
        stringType: '',
        likes: 0,
        dislikes: 0,
        order: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'likes' || name === 'dislikes' || name === 'order' ? parseInt(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        await setDoc(doc(firestore, "problems", formData.id),formData);
        alert("saved to db")
    };

    return (
        <div className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md">
            <h1 className="text-xl font-bold text-center mb-4">Add New Problem</h1>
            <form onSubmit={handleSubmit} className="space-y-3">
                {[
                    { label: 'Category', name: 'category', type: 'text' },
                    { label: 'Difficulty', name: 'difficulty', type: 'text' },
                    { label: 'ID', name: 'id', type: 'text' },
                    { label: 'Title', name: 'title', type: 'text' },
                    { label: 'Video ID', name: 'videoId', type: 'text' },
                    { label: 'Link', name: 'link', type: 'text' },
                    { label: 'Likes', name: 'likes', type: 'number' },
                    { label: 'Dislikes', name: 'dislikes', type: 'number' },
                    { label: 'Order', name: 'order', type: 'number' },
                ].map(({ label, name, type }) => (
                    <div key={name}>
                        <label className="block text-sm font-medium text-gray-700">{label}:</label>
                        <input
                            type={type}
                            name={name}
                            value={formData[name as keyof FormData]} // Type assertion here
                            onChange={handleChange}
                            className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full py-1 mt-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Page;
