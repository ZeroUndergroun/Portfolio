import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Ryan Torrez Portfolio",
  description: "My portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}