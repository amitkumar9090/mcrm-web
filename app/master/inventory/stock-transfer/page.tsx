"use client";

import React from "react";

// Stock Transfer Interface
interface StockTransfer {
  id: number;
  productName: string;
  sku: string;
  fromWarehouse: string;
  toWarehouse: string;
  quantity: number;
  status: "completed" | "pending" | "failed";
  date: string;
}

// Dummy Data
const transfers: StockTransfer[] = [
  {
    id: 1,
    productName: "Apple MacBook Pro 14”",
    sku: "MBP-14-2024",
    fromWarehouse: "Main Warehouse",
    toWarehouse: "City Storage",
    quantity: 10,
    status: "completed",
    date: "2024-11-18 11:00 AM",
  },
  {
    id: 2,
    productName: "Sony PlayStation 5",
    sku: "PS5-DISC",
    fromWarehouse: "City Storage",
    toWarehouse: "Retail Outlet",
    quantity: 3,
    status: "pending",
    date: "2024-11-20 03:15 PM",
  },
  {
    id: 3,
    productName: "Nike Air Zoom Pegasus",
    sku: "NK-PEG-41",
    fromWarehouse: "Main Warehouse",
    toWarehouse: "Primary Outlet",
    quantity: 12,
    status: "failed",
    date: "2024-11-17 09:45 AM",
  },
];

// Badge color function
const getBadgeClass = (status: string) => {
  switch (status) {
    case "completed":
      return "badge bg-success"; // green
    case "pending":
      return "badge bg-warning"; // yellow
    case "failed":
      return "badge bg-danger"; // red
    default:
      return "badge bg-secondary";
  }
};

const page = () => {
  return (
    <div className="content">
      <h4 className="mb-4">Stock Transfer</h4>

      <div className="card border-0 rounded-0 shadow-sm">
        <div className="card-body">
          <h6 className="mb-3">
            Total Transfers:{" "}
            <span className="badge bg-primary">{transfers.length}</span>
          </h6>

          {transfers.length === 0 ? (
            <p className="text-muted">No stock transfer records found.</p>
          ) : (
            <ul className="list-group">
              {transfers.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {/* LEFT SIDE DETAILS */}
                  <div>
                    <strong>{item.productName}</strong>
                    <br />
                    <small className="text-muted">SKU: {item.sku}</small>
                    <br />
                    <small>
                      From: <b>{item.fromWarehouse}</b>
                      {" → "}
                      To: <b>{item.toWarehouse}</b>
                    </small>
                    <br />
                    <small>
                      Quantity: <b>{item.quantity}</b>
                    </small>
                  </div>

                  {/* RIGHT SIDE STATUS */}
                  <div className="text-end">
                    <span className={getBadgeClass(item.status)}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                    <br />
                    <small className="text-muted">{item.date}</small>
                  </div>
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
