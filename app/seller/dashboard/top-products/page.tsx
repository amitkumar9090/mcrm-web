"use client";

import React from "react";

const Page = () => {
  return (
    <div className="container py-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="m-0">Top Products</h2>
        <button className="btn btn-primary">+ Add Product</button>
      </div>

      {/* Filters */}
      <div className="row mb-4 g-3">
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder="Search Product..." />
        </div>
        <div className="col-md-3">
          <select className="form-select">
            <option>Category Filter</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home</option>
            <option>Beauty</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select">
            <option>Sort By</option>
            <option>Highest Sales</option>
            <option>Most Viewed</option>
            <option>Best Ratings</option>
          </select>
        </div>
        <div className="col-md-2">
          <button className="btn btn-secondary w-100">Apply</button>
        </div>
      </div>

      {/* Product Summary Cards */}
      <div className="row g-3 mb-4">

        <div className="col-md-3">
          <div className="card p-3 shadow-sm text-center">
            <h6>Total Products</h6>
            <h3 className="fw-bold">842</h3>
            <span className="text-info small">Inventory data</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm text-center">
            <h6>Top Selling</h6>
            <h3 className="fw-bold">Electric Kettle</h3>
            <span className="text-success small">32,500 sold</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm text-center">
            <h6>Most Viewed</h6>
            <h3 className="fw-bold">Wireless Earbuds</h3>
            <span className="text-primary small">89,400 views</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm text-center">
            <h6>Best Rating</h6>
            <h3 className="fw-bold">Smart Watch</h3>
            <span className="text-warning small">4.9 ★ avg</span>
          </div>
        </div>

      </div>

      {/* Top Products Table */}
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h5 className="mb-0">Best Selling Products</h5>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped mb-0">
            <thead className="table-light">
              <tr>
                <th>Rank</th>
                <th>Product</th>
                <th>Category</th>
                <th>Sales</th>
                <th>Revenue</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#1</td>
                <td>Electric Kettle</td>
                <td>Home Appliances</td>
                <td>32,500</td>
                <td>₹12,50,000</td>
                <td>4.7 ★</td>
                <td><button className="btn btn-sm btn-primary">View</button></td>
              </tr>

              <tr>
                <td>#2</td>
                <td>Wireless Earbuds</td>
                <td>Electronics</td>
                <td>28,100</td>
                <td>₹15,20,000</td>
                <td>4.5 ★</td>
                <td><button className="btn btn-sm btn-primary">View</button></td>
              </tr>

              <tr>
                <td>#3</td>
                <td>Smart Watch</td>
                <td>Electronics</td>
                <td>25,700</td>
                <td>₹20,10,000</td>
                <td>4.9 ★</td>
                <td><button className="btn btn-sm btn-primary">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Page;
