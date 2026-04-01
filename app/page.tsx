import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">
            Welcome to Enatwa Store
          </h1>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Discover curated, high-quality products crafted for your everyday life.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-50 transition-colors text-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <Link href="/products" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Banner */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Clothing", "Bags", "Electronics", "Footwear", "Home", "Sports"].map((cat) => (
              <Link
                key={cat}
                href={`/products?category=${cat}`}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition-colors text-indigo-700 font-semibold text-sm"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

