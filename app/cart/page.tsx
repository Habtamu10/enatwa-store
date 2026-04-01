import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function CartPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Your Cart</h1>

      <div className="flex flex-col items-center justify-center py-24 text-gray-400 bg-white rounded-2xl shadow-sm">
        <ShoppingCartIcon className="h-20 w-20 mb-6 text-gray-300" />
        <p className="text-xl font-medium text-gray-500">Your cart is empty</p>
        <p className="mt-2 text-gray-400">Add some products to get started!</p>
        <Link
          href="/products"
          className="mt-8 inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
}
