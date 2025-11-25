"use client";

import React from "react";

const page = () => {
  return (
    <div className="container mt-4">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 fw-bold">Pending Orders</h1>
      </div>

      {/* Filters */}
      <div className="card p-3 mb-4 shadow-sm">
        <div className="row g-3">

          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search pending orders..."
            />
          </div>

          <div className="col-md-4">
            <select className="form-select">
              <option>Sort by</option>
              <option>Newest</option>
              <option>Oldest</option>
              <option>Amount (High to Low)</option>
              <option>Amount (Low to High)</option>
            </select>
          </div>

          <div className="col-md-4">
            <button className="btn btn-primary w-100">Apply</button>
          </div>

        </div>
      </div>

      {/* Pending Orders Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">

          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>#ORD-11234</td>
                <td>Arjun Patel</td>
                <td>23 Nov 2024</td>
                <td>₹2,499</td>
                <td>
                  <span className="badge bg-warning text-dark">Pending</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-outline-primary me-2">View</button>
                  <button className="btn btn-sm btn-success">Process</button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>#ORD-11229</td>
                <td>Kajal Mehta</td>
                <td>22 Nov 2024</td>
                <td>₹1,150</td>
                <td>
                  <span className="badge bg-warning text-dark">Pending</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-outline-primary me-2">View</button>
                  <button className="btn btn-sm btn-success">Process</button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>#ORD-11190</td>
                <td>Ritu Sharma</td>
                <td>20 Nov 2024</td>
                <td>₹3,799</td>
                <td>
                  <span className="badge bg-warning text-dark">Pending</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-outline-primary me-2">View</button>
                  <button className="btn btn-sm btn-success">Process</button>
                </td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>

    </div>
  );
};

export default page;
