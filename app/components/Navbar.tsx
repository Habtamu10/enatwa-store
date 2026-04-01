import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-indigo-600 tracking-tight">
            Enatwa Store
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              Products
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
