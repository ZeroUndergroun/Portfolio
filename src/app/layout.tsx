import Navbar from "@/components/Navbar";
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Ryan Torrez Portfolio",
  description: "Software Engineer and Game Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-navy-950 text-gray-50`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}