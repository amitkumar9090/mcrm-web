"use client";

import React from "react";

const page = () => {
  return (
    <div className="container mt-4">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 fw-bold">Disabled Products</h1>
      </div>

      {/* Search + Filter */}
      <div className="card p-3 mb-4 shadow-sm">
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search disabled products..."
            />
          </div>

          <div className="col-md-3">
            <select className="form-select">
              <option>Filter by Category</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home Appliance</option>
            </select>
          </div>

          <div className="col-md-3">
            <select className="form-select">
              <option>Sort by</option>
              <option>Name (A-Z)</option>
              <option>Name (Z-A)</option>
              <option>Date Disabled</option>
            </select>
          </div>

          <div className="col-md-2">
            <button className="btn btn-primary w-100">Apply</button>
          </div>
        </div>
      </div>

      {/* Disabled Products Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Disabled On</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Smart Watch X Pro</td>
                <td>SWX-2024</td>
                <td>Electronics</td>
                <td>12 Nov 2024</td>
                <td>
                  <span className="badge bg-danger">Disabled</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-success me-2">
                    Enable
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    View
                  </button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Men's Casual Sneakers</td>
                <td>MCS-110</td>
                <td>Fashion</td>
                <td>05 Nov 2024</td>
                <td>
                  <span className="badge bg-danger">Disabled</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-success me-2">
                    Enable
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    View
                  </button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Air Fryer 4.5L</td>
                <td>AF-4500</td>
                <td>Home Appliance</td>
                <td>29 Oct 2024</td>
                <td>
                  <span className="badge bg-danger">Disabled</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-success me-2">
                    Enable
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    View
                  </button>
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
