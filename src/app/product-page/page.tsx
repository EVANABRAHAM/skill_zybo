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
}

// Server Component (no 'use client')
export const dynamic = 'force-dynamic';

export default async function ProductPage() {
  let products: Product[] = [];
  let errorMsg = null;

  try {
    // In SSR, we often need absolute URL for fetch, but if using axios with configured base URL it might work if environment variables are set.
    // However, api.js uses localStorage which is NOT available on server.
    // We should do a direct fetch here or ensure api.js handles server environment gracefully (it doesn't, it uses localStorage).
    // So we'll use standard fetch to the external API directly, bypassing the client-side api utility for this server call.

    // Using the Base URL provided in the requirements
    const res = await fetch("https://skilltestnextjs.evidam.zybotechlab.com/api/new-products/", {
      cache: 'no-store' // Dynamic data
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const data = await res.json();

    if (Array.isArray(data)) {
      products = data;
    } else if (data.results) {
      products = data.results;
    } else if (data.products) {
      products = data.products;
    }

  } catch (err: any) {
    console.error(err);
    errorMsg = err.message;
  }

  const renderShoeCard = (product: Product, index: number) => {
    const CardType = index % 4;
    // Passing product data from Server to Client Components (ShoeCardX)
    if (CardType === 0) return <ShoeCard1 key={product.id} product={product} />;
    if (CardType === 1) return <ShoeCard2 key={product.id} product={product} />;
    if (CardType === 2) return <ShoeCard3 key={product.id} product={product} />;
    return <ShoeCard4 key={product.id} product={product} />;
  };

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      {/* HEADER (SSR) */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-[60px] py-[60px] flex flex-col gap-[40px]">
        {/* Title */}
        <h1 className="text-white font-inter font-medium text-[32px] leading-tight">
          Men’s Jordan Shoes
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {products.length > 0 ? (
            products.map((product, index) => renderShoeCard(product, index))
          ) : (
            <div className="text-white col-span-4 text-center">
              {errorMsg ? `Error: ${errorMsg}` : "No products found."}
            </div>
          )}
        </div>
      </main>

      {/* FOOTER (SSR) */}
      <Footer />
    </div>
  );
}
