import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/20/solid";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        <div className="p-4">
          <span className="text-xs font-medium text-indigo-600 uppercase tracking-wide">
            {product.category}
          </span>
          <h3 className="mt-1 text-gray-900 font-semibold text-base leading-snug group-hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>

          <div className="mt-2 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className={`h-4 w-4 ${
                  i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-200"
                }`}
              />
            ))}
            <span className="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.inStock && (
              <span className="text-xs text-green-600 font-medium">In Stock</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
