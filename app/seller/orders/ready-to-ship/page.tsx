"use client";

import React from "react";

const page = () => {
  return (
    <div className="container mt-4">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 fw-bold">Ready to Ship</h1>
      </div>

      {/* Filters */}
      <div className="card p-3 mb-4 shadow-sm">
        <div className="row g-3">

          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search ready-to-ship orders..."
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
            <button className="btn btn-primary w-100">Apply Filters</button>
          </div>

        </div>
      </div>

      {/* Ready to Ship Orders Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">

          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Packed On</th>
                <th>Amount</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>#ORD-11920</td>
                <td>Aman Gupta</td>
                <td>24 Nov 2024</td>
                <td>₹4,299</td>
                <td>
                  <span className="badge bg-primary">Ready to Ship</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-outline-primary me-2">View</button>
                  <button className="btn btn-sm btn-success">Ship Now</button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>#ORD-11885</td>
                <td>Sneha Kulkarni</td>
                <td>23 Nov 2024</td>
                <td>₹1,750</td>
                <td>
                  <span className="badge bg-primary">Ready to Ship</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-outline-primary me-2">View</button>
                  <button className="btn btn-sm btn-success">Ship Now</button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>#ORD-11860</td>
                <td>Devika Rao</td>
                <td>22 Nov 2024</td>
                <td>₹2,099</td>
                <td>
                  <span className="badge bg-primary">Ready to Ship</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-outline-primary me-2">View</button>
                  <button className="btn btn-sm btn-success">Ship Now</button>
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
