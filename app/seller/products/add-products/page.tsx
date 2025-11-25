"use client";

import React from "react";

const Page = () => {
  return (
    <div className="container py-4">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="m-0">Add New Product</h2>
        <button className="btn btn-secondary">Back</button>
      </div>

      {/* Product Form */}
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h5 className="mb-0">Product Details</h5>
        </div>

        <div className="card-body">

          <div className="row g-3">

            {/* Product Name */}
            <div className="col-md-6">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter product name"
              />
            </div>

            {/* Category */}
            <div className="col-md-6">
              <label className="form-label">Category</label>
              <select className="form-select">
                <option>Select Category</option>
                <option>Electronics</option>
                <option>Home Appliances</option>
                <option>Fashion</option>
                <option>Accessories</option>
              </select>
            </div>

            {/* Price */}
            <div className="col-md-4">
              <label className="form-label">Price (₹)</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter price"
              />
            </div>

            {/* Discount Price */}
            <div className="col-md-4">
              <label className="form-label">Discount Price (₹)</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter discounted price"
              />
            </div>

            {/* Stock */}
            <div className="col-md-4">
              <label className="form-label">Stock Quantity</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter stock"
              />
            </div>

            {/* Product Description */}
            <div className="col-md-12">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter product description..."
              ></textarea>
            </div>

            {/* Image Upload */}
            <div className="col-md-6">
              <label className="form-label">Upload Product Image</label>
              <input type="file" className="form-control" />
            </div>

            {/* Status */}
            <div className="col-md-6">
              <label className="form-label">Status</label>
              <select className="form-select">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

          </div>
        </div>

        {/* Buttons */}
        <div className="card-footer bg-white d-flex justify-content-end gap-2">
          <button className="btn btn-light">Cancel</button>
          <button className="btn btn-primary">Save Product</button>
        </div>
      </div>

    </div>
  );
};

export default Page;
