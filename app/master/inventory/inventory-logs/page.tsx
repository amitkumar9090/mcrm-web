"use client";

import React from "react";

// Inventory Log Interface
interface InventoryLog {
  id: number;
  productName: string;
  sku: string;
  oldStock: number;
  newStock: number;
  changeType: "increase" | "decrease" | "auto";
  date: string;
}

// Dummy Logs
const logs: InventoryLog[] = [
  {
    id: 1,
    productName: "Apple MacBook Pro 14”",
    sku: "MBP-14-2024",
    oldStock: 20,
    newStock: 25,
    changeType: "increase",
    date: "2024-11-20 10:00 AM",
  },
  {
    id: 2,
    productName: "Sony PlayStation 5",
    sku: "PS5-DISC",
    oldStock: 5,
    newStock: 2,
    changeType: "decrease",
    date: "2024-11-18 02:15 PM",
  },
  {
    id: 3,
    productName: "Nike Air Zoom Pegasus",
    sku: "NK-PEG-41",
    oldStock: 18,
    newStock: 18,
    changeType: "auto",
    date: "2024-11-19 09:30 AM",
  },
];

// Badge color function
const getBadgeClass = (type: string) => {
  switch (type) {
    case "increase":
      return "badge bg-success"; // green
    case "decrease":
      return "badge bg-danger"; // red
    case "auto":
      return "badge bg-secondary"; // grey
    default:
      return "badge bg-dark";
  }
};

const page = () => {
  return (
    <div className="content">
      <h4 className="mb-4">Inventory Logs</h4>

      <div className="card border-0 rounded-0 shadow-sm">
        <div className="card-body">
          <h6 className="mb-3">
            Total Logs:{" "}
            <span className="badge bg-primary">{logs.length}</span>
          </h6>

          {logs.length === 0 ? (
            <p className="text-muted">No inventory logs found.</p>
          ) : (
            <ul className="list-group">
              {logs.map((log) => (
                <li
                  key={log.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{log.productName}</strong>
                    <br />
                    <small className="text-muted">SKU: {log.sku}</small>
                    <br />
                    <small>
                      Old Stock: <b>{log.oldStock}</b> → New Stock:{" "}
                      <b>{log.newStock}</b>
                    </small>
                  </div>

                  <div className="text-end">
                    <span className={getBadgeClass(log.changeType)}>
                      {log.changeType === "increase"
                        ? "Increased"
                        : log.changeType === "decrease"
                        ? "Decreased"
                        : "Auto Update"}
                    </span>
                    <br />
                    <small className="text-muted">{log.date}</small>
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
