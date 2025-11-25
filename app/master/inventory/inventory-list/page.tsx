"use client";

import React from "react";

// Inventory Interface
interface InventoryItem {
  id: number;
  productName: string;
  sku: string;
  category: string;
  stock: number;
  updated_at: string;
}

// Dummy Inventory Data
const inventoryData: InventoryItem[] = [
  {
    id: 1,
    productName: "Apple MacBook Pro 14”",
    sku: "MBP-14-2024",
    category: "Laptops",
    stock: 12,
    updated_at: "2024-11-19T09:00:00Z",
  },
  {
    id: 2,
    productName: "Samsung Galaxy S24 Ultra",
    sku: "S24-Ultra",
    category: "Smartphones",
    stock: 3,
    updated_at: "2024-11-20T11:00:00Z",
  },
  {
    id: 3,
    productName: "Nike Air Zoom Pegasus",
    sku: "NK-PEG-41",
    category: "Footwear",
    stock: 20,
    updated_at: "2024-11-17T14:00:00Z",
  },
  {
    id: 4,
    productName: "Sony PlayStation 5",
    sku: "PS5-DISC",
    category: "Gaming",
    stock: 2,
    updated_at: "2024-11-18T16:00:00Z",
  },
];

// ----------------------------------
// INVENTORY LIST PAGE
// ----------------------------------

const page = () => {
  return (
    <div className="content">
      <h4 className="mb-4">Inventory List</h4>

      <div className="card border-0 rounded-0">
        <div className="card-body">

          <h6 className="mb-3">
            Total Items:{" "}
            <span className="badge bg-primary">{inventoryData.length}</span>
          </h6>

          {inventoryData.length === 0 ? (
            <p className="text-muted">No inventory items found.</p>
          ) : (
            <ul className="list-group">
              {inventoryData.map((item) => {
                const lowStock = item.stock <= 5;

                return (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <strong>{item.productName}</strong>
                      <br />
                      <small className="text-muted">
                        SKU: {item.sku} • Category: {item.category}
                      </small>
                      <br />
                      <small className="text-muted">
                        Updated:{" "}
                        {new Date(item.updated_at).toLocaleDateString()}
                      </small>
                    </div>

                    {/* Stock Badge */}
                    <span
                      className={`badge ${
                        lowStock ? "bg-danger" : "bg-success"
                      }`}
                    >
                      {item.stock} in stock
                    </span>
                  </li>
                );
              })}
            </ul>
          )}

        </div>
      </div>
    </div>
  );
};

export default page;
