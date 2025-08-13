import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="space-x-4">
        <Link href="/">Home</Link> |  
        <Link href="/about">About</Link> |  
        <Link href="/projects">Projects</Link> |  
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}