import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Enatwa Store",
  description: "Your one-stop shop for quality products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-gray-50 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Enatwa Store. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
