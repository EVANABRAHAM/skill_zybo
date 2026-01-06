'use client';
import { useState, useEffect } from "react";
import ShoeCard1 from "@/components/product/shoe1";
import ShoeCard2 from "@/components/product/shoe2";
import ShoeCard3 from "@/components/product/shoe3";
import ShoeCard4 from "@/components/product/shoe4";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header";
import api from "@/utils/api";

interface Product {
  id: number | string;
  name: string;
  price?: number;
  original_price?: number;
  // Add other fields as expected
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/api/new-products/");
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (response.data.results) {
          // Handle paginated response if applicable
          setProducts(response.data.results);
        } else {
          // Fallback or specific object structure
          setProducts(response.data.products || []);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderShoeCard = (product: Product, index: number) => {
    const CardType = index % 4; // Cycle through 0, 1, 2, 3
    if (CardType === 0) return <ShoeCard1 key={product.id} product={product} />;
    if (CardType === 1) return <ShoeCard2 key={product.id} product={product} />;
    if (CardType === 2) return <ShoeCard3 key={product.id} product={product} />;
    return <ShoeCard4 key={product.id} product={product} />;
  };

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-[60px] py-[60px] flex flex-col gap-[40px]">
        {/* Title */}
        <h1 className="text-white font-inter font-medium text-[32px] leading-tight">
          Men’s Jordan Shoes
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {loading ? (
            // Skeleton or Loading State
            <div className="text-white col-span-4 text-center">Loading Products...</div>
          ) : (
            products.map((product, index) => renderShoeCard(product, index))
          )}

          {/* Fallback if no products found */}
          {!loading && products.length === 0 && (
            <div className="text-white col-span-4 text-center">No products found.</div>
          )}
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
