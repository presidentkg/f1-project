import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
            <Link href="/">
                <Image src="/F1Logo.svg" alt="F1 Logo" width={100} height={40} className="mr-4" />
            </Link>
        </div>
        <nav className="flex flex-col items-center md:items-start">
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about-me" className="hover:underline">
                About me
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:underline">
                Resources
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
            <Link href="https://github.com/presidentkg/f1-project" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-white">
                <Image
                    src="/github.svg"
                    alt="Github Logo"
                    width={40}
                    height={40}
                    className="filter invert"
                />
                <span>GitHub</span>
            </Link>

            <Link href="https://www.linkedin.com/in/karlragnar-kling/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-white">
                <Image
                    src="/linkedIn.svg"
                    alt="LinkedIn Logo"
                    width={40}
                    height={40}
                />
                <span>LinkedIn</span>
            </Link>
        </div>
      </div>
    </footer>
  );
}