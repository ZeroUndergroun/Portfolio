import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur-sm bg-navy-900/75 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex justify-center items-center space-x-8">
          <Link href="/" className="nav-link text-gray-200 hover:text-white text-lg md:text-xl font-medium">
            Home
          </Link>
          <Link href="/about" className="nav-link text-gray-200 hover:text-white text-lg md:text-xl font-medium">
            About
          </Link>
          <Link href="/projects" className="nav-link text-gray-200 hover:text-white text-lg md:text-xl font-medium">
            Projects
          </Link>
          <Link href="/contact" className="nav-link text-gray-200 hover:text-white text-lg md:text-xl font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}