"use client";

import React from "react";

// Product interface
interface Product {
  id: number;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  image: string | null;
  created_at: string;
  updated_at: string;
  approvalStatus: "pending" | "approved" | "rejected";
}

// Dummy data (same as the main table)
const products: Product[] = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro",
    sku: "IP15-PRO-256",
    category: "Smartphones",
    price: 1299,
    stock: 42,
    image: null,
    created_at: "2024-11-01T10:00:00Z",
    updated_at: "2024-11-16T14:50:00Z",
    approvalStatus: "pending",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5 Headphones",
    sku: "SONY-XM5",
    category: "Electronics",
    price: 399,
    stock: 125,
    image: null,
    created_at: "2024-10-10T12:00:00Z",
    updated_at: "2024-11-15T10:00:00Z",
    approvalStatus: "approved",
  },
  {
    id: 3,
    name: "Nike Air Max 2024",
    sku: "NK-AMX-24",
    category: "Footwear",
    price: 199,
    stock: 0,
    image: null,
    created_at: "2024-09-14T11:00:00Z",
    updated_at: "2024-11-12T09:00:00Z",
    approvalStatus: "rejected",
  },
  {
    id: 4,
    name: "Samsung 55'' 4K Smart TV",
    sku: "SMSNG-TV55",
    category: "Home Appliances",
    price: 699,
    stock: 13,
    image: null,
    created_at: "2024-08-20T15:00:00Z",
    updated_at: "2024-11-17T11:00:00Z",
    approvalStatus: "approved",
  },
];

const page = () => {
  // Filter only ACTIVE (approved) products
  const activeProducts = products.filter((p) => p.approvalStatus === "approved");

  return (
    <div className="content">
      <h4 className="mb-4">Active Products</h4>

      <div className="card border-0 rounded-0">
        <div className="card-body">
          <h6 className="mb-3">
            Total Active Products:{" "}
            <span className="badge bg-success">{activeProducts.length}</span>
          </h6>

          {/* List Active Products */}
          {activeProducts.length === 0 ? (
            <p className="text-muted">No active products found.</p>
          ) : (
            <ul className="list-group">
              {activeProducts.map((product) => (
                <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{product.name}</strong>
                    <br />
                    <small className="text-muted">SKU: {product.sku}</small>
                  </div>

                  <span className="badge bg-success">Approved</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
