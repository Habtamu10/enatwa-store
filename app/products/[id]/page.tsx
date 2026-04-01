import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StarIcon } from "@heroicons/react/20/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { getProductById, products } from "@/lib/products";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/products" className="text-indigo-600 hover:text-indigo-800 font-medium mb-8 inline-block">
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
        {/* Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="bg-white text-gray-800 text-lg font-semibold px-5 py-2 rounded-full">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">
            {product.category}
          </span>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">{product.name}</h1>

          <div className="mt-4 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">{product.description}</p>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-3xl font-extrabold text-gray-900">${product.price.toFixed(2)}</span>
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full ${
                product.inStock
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <button
            disabled={!product.inStock}
            className="mt-8 flex items-center justify-center gap-3 w-full md:w-auto px-10 py-4 rounded-full bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
