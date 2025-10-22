import Image from "next/image";
import Link from "next/link";
import SearchBar from "../search-bar/search-bar";


export default function NavBar() {
    return (
        <nav className="w-full h-16 bg-gray-800 text-white flex items-center px-4">
            <Link href="/">
                <Image src="/F1Logo.svg" alt="F1 Logo" width={100} height={40} className="mr-4" />
            </Link>
            <SearchBar />
            <ul className="flex space-x-20 ml-auto mr-auto">
                <li>
                    <Link href="/schedule" className="text-xl">Schedule</Link>
                    {/* <span className="ml-2 mr-2">▽</span> */}
                </li>
                <li>
                    <Link href="/results" className="text-xl">Results</Link>
                </li>
                <li>
                    <Link href="/drivers" className="text-xl">Drivers</Link>
                    {/* <span className="ml-2 mr-2">▽</span> */}
                </li>
                <li>
                    <Link href="/teams" className="text-xl">Teams</Link>
                    {/* <span className="ml-2 mr-2">▽</span> */}
                </li>
            </ul>
        </nav>
)}