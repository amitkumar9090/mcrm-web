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
  approvalStatus:
    | "pending"
    | "approved"
    | "rejected"
    | "draft"
    | "disabled"
    | "deleted";
}

// Dummy product data
const products: Product[] = [
  {
    id: 1,
    name: "Apple MacBook Pro 14”",
    sku: "MBP-14-2024",
    category: "Laptops",
    price: 1999,
    stock: 30,
    image: null,
    created_at: "2024-10-10T10:00:00Z",
    updated_at: "2024-11-16T15:00:00Z",
    approvalStatus: "approved",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    sku: "S24-Ultra",
    category: "Smartphones",
    price: 1299,
    stock: 55,
    image: null,
    created_at: "2024-11-01T11:00:00Z",
    updated_at: "2024-11-20T10:00:00Z",
    approvalStatus: "deleted",
  },
  {
    id: 3,
    name: "Nike Air Zoom Pegasus",
    sku: "NK-PEG-41",
    category: "Footwear",
    price: 149,
    stock: 18,
    image: null,
    created_at: "2024-09-18T09:00:00Z",
    updated_at: "2024-11-02T10:00:00Z",
    approvalStatus: "deleted",
  },
  {
    id: 4,
    name: "Sony PlayStation 5",
    sku: "PS5-DISC",
    category: "Gaming",
    price: 499,
    stock: 5,
    image: null,
    created_at: "2024-10-05T13:00:00Z",
    updated_at: "2024-11-17T12:00:00Z",
    approvalStatus: "approved",
  },
];

// ---------------------------
// DELETED PRODUCTS PAGE
// ---------------------------

const page = () => {
  const deletedProducts = products.filter(
    (item) => item.approvalStatus === "deleted"
  );

  return (
    <div className="content">
      <h4 className="mb-4">Deleted Products (Trash)</h4>

      <div className="card border-0 rounded-0">
        <div className="card-body">
          <h6 className="mb-3">
            Total Deleted Products:{" "}
            <span className="badge bg-primary">{deletedProducts.length}</span>
          </h6>

          {deletedProducts.length === 0 ? (
            <p className="text-muted">No deleted products found.</p>
          ) : (
            <ul className="list-group">
              {deletedProducts.map((product) => (
                <li
                  key={product.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{product.name}</strong>
                    <br />
                    <small className="text-muted">SKU: {product.sku}</small>
                  </div>

                  {/* Badge color RED */}
                  <span className="badge bg-primary">Deleted</span>
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
