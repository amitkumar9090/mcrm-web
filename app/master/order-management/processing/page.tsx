"use client";

import React, { useState } from "react";
import { Search, Loader, Eye } from "lucide-react";

const Page = () => {
  const [search, setSearch] = useState("");

  const orders = [
    {
      id: "PROC-3101",
      customer: "Rohan Mehta",
      amount: 249.99,
      date: "2024-11-20",
      status: "processing",
    },
    {
      id: "PROC-3102",
      customer: "Kajal Desai",
      amount: 499.5,
      date: "2024-11-19",
      status: "processing",
    },
    {
      id: "PROC-3103",
      customer: "Suresh Kumar",
      amount: 179.0,
      date: "2024-11-18",
      status: "processing",
    },
  ];

  const filteredOrders = orders.filter(
    (o) =>
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      {/* PAGE TITLE */}
      <h4 className="fw-bold mb-4">Processing Orders</h4>

      {/* SEARCH BAR */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3 align-items-center">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <Search size={18} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Order ID or Customer Name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESSING ORDERS TABLE */}
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center text-muted py-4">
                    No processing orders found.
                  </td>
                </tr>
              ) : (
                filteredOrders.map((o) => (
                  <tr key={o.id}>
                    <td>
                      <Loader size={16} className="me-2 text-primary" />
                      {o.id}
                    </td>

                    <td>{o.customer}</td>
                    <td>{o.date}</td>

                    <td className="fw-semibold">
                      ₹{o.amount.toLocaleString()}
                    </td>

                    <td>
                      <span className="badge bg-primary">In Process</span>
                    </td>

                    <td className="text-end">
                      <button className="btn btn-sm btn-outline-primary">
                        <Eye size={17} className="me-1" />
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
