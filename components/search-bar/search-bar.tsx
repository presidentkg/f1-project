"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export default function SearchBar(){
    const searchParams = useSearchParams();
    const { push } = useRouter();

    const handleClick = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const queryString = formData.get("query") as string;
        const params = new URLSearchParams(searchParams);
        if (queryString) {
        params.set("query", queryString);
        } else {
        params.delete("query");
        }
        push(`/search?${params}`);
    }

    return(
        <div className="flex items-center w-60 md:w-80 rounded-lg shadow-md">
            <div className="flex items-center w-full max-w-md mx-auto rounded-lg shadow-md">
                <form onSubmit={handleClick} className="flex w-full items-center overflow-hidden rounded-lg" aria-label="Site search">
                    <input
                    type="search"
                    placeholder="Search..."
                    aria-label="search"
                    className="flex-grow rounded-l-full text-gray-700 focus:outline-none px-4 bg-white"
                    name="query"
                    />
                    <button
                        type="submit" 
                        className="flex items-center justify-center h-10 w-10 m-2 rounded-lg lg:bg-blue-400 lg:hover:bg-blue-500 transition-colors"
                        aria-label="Submit search"
                    >
                        <Image
                        src="/Search.svg"
                        alt="Search icon"
                        width={20}
                        height={20}
                        />
                    </button>
                </form>
            </div>
        </div>
    )}