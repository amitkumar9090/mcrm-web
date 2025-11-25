"use client";

import React from "react";
import { Search, Filter, Package } from "lucide-react";

const page = () => {
  return (
    <div className="container py-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 d-flex align-items-center gap-2">
          <Package size={26} />
          Stock List
        </h1>

        <button className="btn btn-dark">Export CSV</button>
      </div>

      {/* Search + Filter */}
      <div className="card p-3 mb-4">
        <div className="row g-3 align-items-center">
          
          {/* Search */}
          <div className="col-md-4">
            <div className="input-group">
              <span className="input-group-text bg-light">
                <Search size={16} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
              />
            </div>
          </div>

          {/* Filter Button */}
          <div className="col-md-2">
            <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2">
              <Filter size={16} />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Product</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Wireless Keyboard</td>
                <td>SKU-00123</td>
                <td>Accessories</td>
                <td>42</td>
                <td>
                  <span className="badge bg-success">In Stock</span>
                </td>
              </tr>

              <tr>
                <td>Bluetooth Speaker</td>
                <td>SKU-00456</td>
                <td>Audio</td>
                <td>0</td>
                <td>
                  <span className="badge bg-danger">Out of Stock</span>
                </td>
              </tr>

              <tr>
                <td>Gaming Mouse</td>
                <td>SKU-00987</td>
                <td>Accessories</td>
                <td>12</td>
                <td>
                  <span className="badge bg-warning text-dark">Low Stock</span>
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
