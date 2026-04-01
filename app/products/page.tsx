import { categories, getProductsByCategory } from "@/lib/products";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category = "All" } = await searchParams;
  const filtered = getProductsByCategory(category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">All Products</h1>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/products?category=${cat}`}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              category === cat
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:border-indigo-400 hover:text-indigo-600"
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-24 text-gray-500">
          <p className="text-xl">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
