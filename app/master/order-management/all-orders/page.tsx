"use client";

import React, { useState } from "react";
import { Search, ShoppingCart, Eye } from "lucide-react";

const Page = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const orders = [
    {
      id: "ORD-1001",
      customer: "John Anderson",
      amount: 249.99,
      date: "2024-11-20",
      status: "processing",
    },
    {
      id: "ORD-1002",
      customer: "Sarah Wilson",
      amount: 119.0,
      date: "2024-11-18",
      status: "completed",
    },
    {
      id: "ORD-1003",
      customer: "David Parker",
      amount: 459.5,
      date: "2024-11-19",
      status: "pending",
    },
    {
      id: "ORD-1004",
      customer: "Emma Davis",
      amount: 89.99,
      date: "2024-11-17",
      status: "cancelled",
    },
  ];

  // ---- FILTER ORDERS ----
  const filteredOrders = orders.filter((o) => {
    const matchesSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ? true : o.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // ---- STATUS BADGE COLOR ----
  const statusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return "badge bg-warning";
      case "processing":
        return "badge bg-primary";
      case "completed":
        return "badge bg-success";
      case "cancelled":
        return "badge bg-danger";
      default:
        return "badge bg-secondary";
    }
  };

  return (
    <div className="container py-4">
      {/* PAGE TITLE */}
      <h4 className="fw-bold mb-4">All Orders</h4>

      {/* FILTER BAR */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3 align-items-center">

            {/* Search */}
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

            {/* Status Filter */}
            <div className="col-md-4">
              <select
                className="form-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

          </div>
        </div>
      </div>

      {/* ORDERS TABLE */}
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
                    No orders found.
                  </td>
                </tr>
              ) : (
                filteredOrders.map((o) => (
                  <tr key={o.id}>
                    <td>
                      <ShoppingCart size={16} className="me-2 text-secondary" />
                      {o.id}
                    </td>

                    <td>{o.customer}</td>
                    <td>{o.date}</td>

                    <td className="fw-semibold">
                      ₹{o.amount.toLocaleString()}
                    </td>

                    <td>
                      <span className={statusBadge(o.status)}>
                        {o.status.charAt(0).toUpperCase() + o.status.slice(1)}
                      </span>
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
