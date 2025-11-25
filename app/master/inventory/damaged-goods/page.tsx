"use client";

import React from "react";

interface DamagedItem {
  id: number;
  productName: string;
  sku: string;
  category: string;
  damageType: string;
  quantity: number;
  reportedBy: string;
  status: "pending" | "resolved" | "review";
  date: string;
}

const damagedGoods: DamagedItem[] = [
  {
    id: 1,
    productName: "Samsung Galaxy S24 Ultra",
    sku: "SG-S24U-512",
    category: "Smartphones",
    damageType: "Screen Cracked",
    quantity: 2,
    reportedBy: "Warehouse Staff",
    status: "resolved",
    date: "2024-11-17 10:30 AM",
  },
  {
    id: 2,
    productName: "Dell XPS 15",
    sku: "DELL-XPS15-24",
    category: "Laptops",
    damageType: "Box Damaged",
    quantity: 1,
    reportedBy: "Inventory Manager",
    status: "pending",
    date: "2024-11-20 1:15 PM",
  },
  {
    id: 3,
    productName: "Nike Air Max 2024",
    sku: "NK-AMX24",
    category: "Footwear",
    damageType: "Color Fade",
    quantity: 4,
    reportedBy: "Quality Team",
    status: "review",
    date: "2024-11-19 9:42 AM",
  },
];

const getBadgeClass = (status: string) => {
  switch (status) {
    case "resolved":
      return "badge bg-success";
    case "pending":
      return "badge bg-danger"; // red (as requested)
    case "review":
      return "badge bg-warning text-dark";
    default:
      return "badge bg-secondary";
  }
};

const page = () => {
  return (
    <div className="content">
      <h4 className="mb-4">Damaged Goods</h4>

      <div className="card border-0 rounded-0 shadow-sm">
        <div className="card-body">
          <h6 className="mb-3">
            Total Reported:{" "}
            <span className="badge bg-primary">{damagedGoods.length}</span>
          </h6>

          {damagedGoods.length === 0 ? (
            <p className="text-muted">No damaged goods reported.</p>
          ) : (
            <ul className="list-group">
              {damagedGoods.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {/* LEFT SECTION */}
                  <div>
                    <strong>{item.productName}</strong>
                    <br />
                    <small className="text-muted">
                      SKU: {item.sku} • Category: {item.category}
                    </small>
                    <br />
                    <small>
                      Damage: <b>{item.damageType}</b>
                    </small>
                    <br />
                    <small>
                      Quantity: <b>{item.quantity}</b>
                    </small>
                    <br />
                    <small>
                      Reported by: <b>{item.reportedBy}</b>
                    </small>
                  </div>

                  {/* RIGHT SECTION */}
                  <div className="text-end">
                    <span className={getBadgeClass(item.status)}>
                      {item.status === "resolved"
                        ? "Resolved"
                        : item.status === "pending"
                        ? "Pending"
                        : "Under Review"}
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
