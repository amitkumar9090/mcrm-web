"use client";

import React from "react";

const page = () => {
  return (
    <div className="container mt-4">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 fw-bold">Draft Products</h1>
      </div>

      {/* Search & Filters */}
      <div className="card p-3 mb-4 shadow-sm">
        <div className="row g-3">

          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search draft products..."
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
              <option>Recently Updated</option>
            </select>
          </div>

          <div className="col-md-2">
            <button className="btn btn-primary w-100">Apply</button>
          </div>

        </div>
      </div>

      {/* Draft Products Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">

            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Last Edited</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>Wireless Bluetooth Speaker</td>
                <td>WB-880</td>
                <td>Electronics</td>
                <td>20 Nov 2024</td>
                <td>
                  <span className="badge bg-warning text-dark">Draft</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-primary me-2">Edit</button>
                  <button className="btn btn-sm btn-success me-2">Publish</button>
                  <button className="btn btn-sm btn-outline-danger">Delete</button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Men's Denim Jacket</td>
                <td>MDJ-202</td>
                <td>Fashion</td>
                <td>16 Nov 2024</td>
                <td>
                  <span className="badge bg-warning text-dark">Draft</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-primary me-2">Edit</button>
                  <button className="btn btn-sm btn-success me-2">Publish</button>
                  <button className="btn btn-sm btn-outline-danger">Delete</button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Electric Kettle 1.8L</td>
                <td>EK-450</td>
                <td>Home Appliance</td>
                <td>10 Nov 2024</td>
                <td>
                  <span className="badge bg-warning text-dark">Draft</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-primary me-2">Edit</button>
                  <button className="btn btn-sm btn-success me-2">Publish</button>
                  <button className="btn btn-sm btn-outline-danger">Delete</button>
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
