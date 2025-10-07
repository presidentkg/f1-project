import Image from "next/image";
import Link from "next/link";


export default function NavBar() {
    return (
        <nav className="w-full h-16 bg-gray-800 text-white flex items-center px-4">
            <Image src="/F1Logo.svg" alt="F1 Logo" width={100} height={40} className="mr-4" />
            <ul className="flex space-x-4 ml-auto">
                <li>
                    <Link href="/schedule">Schedule</Link>
                </li>
                <li>
                    <Link href="/results">Results</Link>
                </li>
                <li>
                    <Link href="/drivers">Drivers</Link>
                </li>
                <li>
                    <Link href="/teams">Teams</Link>
                </li>
            </ul>
        </nav>
)}