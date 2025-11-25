"use client";

import React from "react";

const Page = () => {
  return (
    <div className="container py-4">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="m-0">All Products</h2>
        <button className="btn btn-primary">+ Add New Product</button>
      </div>

      {/* Filters */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
          />
        </div>

        <div className="col-md-3">
          <select className="form-select">
            <option>Category Filter</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home Appliances</option>
            <option>Grocery</option>
          </select>
        </div>

        <div className="col-md-3">
          <select className="form-select">
            <option>Sort By</option>
            <option>Name (A-Z)</option>
            <option>Price (Low → High)</option>
            <option>Price (High → Low)</option>
            <option>Latest</option>
          </select>
        </div>

        <div className="col-md-2">
          <button className="btn btn-secondary w-100">Apply</button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row g-4">

        {/* Product Card */}
        <div className="col-md-3">
          <div className="card shadow-sm">
            <img
              src="https://via.placeholder.com/300x200"
              className="card-img-top"
              alt="Product"
            />
            <div className="card-body">
              <h6 className="card-title">Wireless Earbuds</h6>
              <p className="text-muted small mb-1">Electronics</p>
              <p className="fw-bold mb-2">₹1,499</p>
              <button className="btn btn-sm btn-outline-primary w-100">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Product Card */}
        <div className="col-md-3">
          <div className="card shadow-sm">
            <img
              src="https://via.placeholder.com/300x200"
              className="card-img-top"
              alt="Product"
            />
            <div className="card-body">
              <h6 className="card-title">Smart Watch</h6>
              <p className="text-muted small mb-1">Wearables</p>
              <p className="fw-bold mb-2">₹2,999</p>
              <button className="btn btn-sm btn-outline-primary w-100">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Product Card */}
        <div className="col-md-3">
          <div className="card shadow-sm">
            <img
              src="https://via.placeholder.com/300x200"
              className="card-img-top"
              alt="Product"
            />
            <div className="card-body">
              <h6 className="card-title">Electric Kettle</h6>
              <p className="text-muted small mb-1">Home Appliances</p>
              <p className="fw-bold mb-2">₹1,299</p>
              <button className="btn btn-sm btn-outline-primary w-100">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Product Card */}
        <div className="col-md-3">
          <div className="card shadow-sm">
            <img
              src="https://via.placeholder.com/300x200"
              className="card-img-top"
              alt="Product"
            />
            <div className="card-body">
              <h6 className="card-title">Bluetooth Speaker</h6>
              <p className="text-muted small mb-1">Audio</p>
              <p className="fw-bold mb-2">₹1,899</p>
              <button className="btn btn-sm btn-outline-primary w-100">
                View Details
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Pagination */}
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <button className="page-link">Previous</button>
          </li>
          <li className="page-item active">
            <button className="page-link">1</button>
          </li>
          <li className="page-item">
            <button className="page-link">2</button>
          </li>
          <li className="page-item">
            <button className="page-link">3</button>
          </li>
          <li className="page-item">
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Page;
