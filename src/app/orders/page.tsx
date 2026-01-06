'use client';
import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/Footer";
import api from "@/utils/api";

interface Order {
    id: string | number;
    total_amount: number;
    payment_status: string;
    created_at?: string;
    // Add other fields as needed
}

export default function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await api.get("/api/user-orders/");
                if (Array.isArray(response.data)) {
                    setOrders(response.data);
                } else if (response.data.orders) {
                    setOrders(response.data.orders);
                } else {
                    console.error("Unexpected order data structure:", response.data);
                }
            } catch (error) {
                console.error("Failed to fetch orders:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="min-h-screen bg-[#111111] flex flex-col text-white">
            {/* HEADER */}
            <Header />

            {/* MAIN CONTENT */}
            <main className="flex-1 w-full max-w-[1440px] mx-auto px-[60px] py-[60px] flex flex-col gap-[40px]">
                {/* Title */}
                <h1 className="font-inter font-medium text-[32px] leading-tight">
                    My Orders
                </h1>

                {/* Orders List */}
                <div className="flex flex-col gap-4">
                    {loading ? (
                        <div className="text-white/60">Loading orders...</div>
                    ) : orders.length > 0 ? (
                        orders.map((order) => (
                            <div
                                key={order.id}
                                className="w-full bg-[#1A1A1A] p-6 rounded-[12px] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-white/5"
                            >
                                <div className="flex flex-col gap-2">
                                    <div className="text-[18px] font-semibold text-white">Order #{order.id}</div>
                                    <div className="text-[14px] text-white/60">
                                        {order.created_at ? new Date(order.created_at).toLocaleDateString() : "Date not available"}
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                                    <div className="flex flex-col">
                                        <span className="text-[12px] text-white/40 uppercase tracking-wider">Total Amount</span>
                                        <span className="text-[16px] font-medium">₹{order.total_amount}</span>
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="text-[12px] text-white/40 uppercase tracking-wider">Status</span>
                                        <span className={`text-[16px] font-medium ${order.payment_status === 'Paid' ? 'text-[#9ADA2A]' : 'text-yellow-400'
                                            }`}>
                                            {order.payment_status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-white/60 text-center py-10">
                            You have not placed any orders yet.
                        </div>
                    )}
                </div>
            </main>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}
