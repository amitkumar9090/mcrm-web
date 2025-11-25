"use client";

import React from "react";

const page = () => {
  return (
    <div className="container mt-4">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 fw-bold">Out of Stock Products</h1>
      </div>

      {/* Filters */}
      <div className="card p-3 mb-4 shadow-sm">
        <div className="row g-3">

          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search out-of-stock products..."
            />
          </div>

          <div className="col-md-4">
            <select className="form-select">
              <option>Filter by Category</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home Appliance</option>
            </select>
          </div>

          <div className="col-md-4">
            <button className="btn btn-primary w-100">Apply Filters</button>
          </div>

        </div>
      </div>

      {/* Out of Stock Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">

          <table className="table table-hover mb-0">

            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Last Updated</th>
                <th>Stock Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>Bluetooth Headphones</td>
                <td>BH-220</td>
                <td>Electronics</td>
                <td>23 Nov 2024</td>
                <td>
                  <span className="badge bg-danger">Out of Stock</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-primary me-2">Restock</button>
                  <button className="btn btn-sm btn-outline-secondary">View</button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Women's Handbag</td>
                <td>WHB-501</td>
                <td>Fashion</td>
                <td>21 Nov 2024</td>
                <td>
                  <span className="badge bg-danger">Out of Stock</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-primary me-2">Restock</button>
                  <button className="btn btn-sm btn-outline-secondary">View</button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Air Purifier Pro</td>
                <td>APP-900</td>
                <td>Home Appliance</td>
                <td>18 Nov 2024</td>
                <td>
                  <span className="badge bg-danger">Out of Stock</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-primary me-2">Restock</button>
                  <button className="btn btn-sm btn-outline-secondary">View</button>
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
