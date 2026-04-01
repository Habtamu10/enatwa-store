export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Tee",
    description: "A timeless white cotton t-shirt crafted from 100% organic cotton for everyday comfort.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "Clothing",
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
  },
  {
    id: 2,
    name: "Leather Backpack",
    description: "Premium genuine leather backpack with multiple compartments, perfect for work or travel.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    category: "Bags",
    rating: 4.8,
    reviewCount: 84,
    inStock: true,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    description: "Over-ear noise-cancelling headphones with 30-hour battery life and crystal-clear sound.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Electronics",
    rating: 4.7,
    reviewCount: 256,
    inStock: true,
  },
  {
    id: 4,
    name: "Running Sneakers",
    description: "Lightweight performance sneakers with advanced cushioning for your daily runs.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "Footwear",
    rating: 4.6,
    reviewCount: 310,
    inStock: true,
  },
  {
    id: 5,
    name: "Ceramic Coffee Mug",
    description: "Hand-crafted ceramic mug with a comfortable handle, dishwasher safe, holds 12 oz.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    category: "Home",
    rating: 4.4,
    reviewCount: 67,
    inStock: true,
  },
  {
    id: 6,
    name: "Stainless Steel Watch",
    description: "Elegant stainless steel watch with sapphire crystal glass and 50m water resistance.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Accessories",
    rating: 4.9,
    reviewCount: 42,
    inStock: false,
  },
  {
    id: 7,
    name: "Yoga Mat",
    description: "Extra-thick non-slip yoga mat made from eco-friendly TPE material, includes carrying strap.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    category: "Sports",
    rating: 4.3,
    reviewCount: 195,
    inStock: true,
  },
  {
    id: 8,
    name: "Scented Candle Set",
    description: "Set of 3 hand-poured soy wax candles in lavender, vanilla, and cedarwood scents.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=400&h=400&fit=crop",
    category: "Home",
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
  },
];

export const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}
