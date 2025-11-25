"use client";

import React from "react";

const Page = () => {
  return (
    <div className="container py-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="m-0">Orders Summary</h2>
        <button className="btn btn-primary">+ New Order</button>
      </div>

      {/* Filters Row */}
      <div className="row mb-4">
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Search Order..." />
        </div>
        <div className="col-md-3">
          <select className="form-select">
            <option>Status Filter</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
        </div>
        <div className="col-md-3">
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary w-100">Apply Filters</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-center p-3 shadow-sm">
            <h5>Total Orders</h5>
            <p className="fs-4 fw-bold">1,240</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center p-3 shadow-sm">
            <h5>Delivered</h5>
            <p className="fs-4 fw-bold text-success">950</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center p-3 shadow-sm">
            <h5>Pending</h5>
            <p className="fs-4 fw-bold text-warning">180</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center p-3 shadow-sm">
            <h5>Cancelled</h5>
            <p className="fs-4 fw-bold text-danger">110</p>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h5 className="mb-0">Recent Orders</h5>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-bordered mb-0">
            <thead className="table-light">
              <tr>
                <th>#ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1023</td>
                <td>John Doe</td>
                <td>2025-02-12</td>
                <td>₹2,499</td>
                <td><span className="badge bg-success">Delivered</span></td>
                <td>
                  <button className="btn btn-sm btn-primary">View</button>
                </td>
              </tr>

              <tr>
                <td>1024</td>
                <td>Riya Sharma</td>
                <td>2025-02-13</td>
                <td>₹1,599</td>
                <td><span className="badge bg-warning">Pending</span></td>
                <td>
                  <button className="btn btn-sm btn-primary">View</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Page;
