"use client";

import React from "react";

const Page = () => {
  return (
    <div className="container py-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="m-0">Pending Review</h2>
        <button className="btn btn-secondary">Back</button>
      </div>

      {/* Filters */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search user or product..."
          />
        </div>

        <div className="col-md-3">
          <select className="form-select">
            <option>Filter by Rating</option>
            <option>1 ★</option>
            <option>2 ★</option>
            <option>3 ★</option>
            <option>4 ★</option>
            <option>5 ★</option>
          </select>
        </div>

        <div className="col-md-3">
          <select className="form-select">
            <option>Sort By</option>
            <option>Newest First</option>
            <option>Oldest First</option>
            <option>Highest Rating</option>
            <option>Lowest Rating</option>
          </select>
        </div>

        <div className="col-md-2">
          <button className="btn btn-secondary w-100">Apply</button>
        </div>
      </div>

      {/* Pending Reviews List */}
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h5 className="mb-0">Reviews Awaiting Approval</h5>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped mb-0">
            <thead className="table-light">
              <tr>
                <th>User</th>
                <th>Product</th>
                <th>Rating</th>
                <th>Review</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Riya Sharma</td>
                <td>Smart Watch</td>
                <td>4 ★</td>
                <td>Good product, loved it!</td>
                <td>2025-02-15</td>
                <td>
                  <span className="badge bg-warning">Pending</span>
                </td>
                <td>
                  <div className="btn-group gap-1">
                    <button className="btn btn-sm btn-success">Approve</button>
                    <button className="btn btn-sm btn-danger">Reject</button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>Rahul Kumar</td>
                <td>Wireless Earbuds</td>
                <td>3 ★</td>
                <td>Sound quality is average.</td>
                <td>2025-02-14</td>
                <td>
                  <span className="badge bg-warning">Pending</span>
                </td>
                <td>
                  <div className="btn-group gap-1">
                    <button className="btn btn-sm btn-success">Approve</button>
                    <button className="btn btn-sm btn-danger">Reject</button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>Ananya Verma</td>
                <td>Bluetooth Speaker</td>
                <td>5 ★</td>
                <td>Amazing bass! Must buy.</td>
                <td>2025-02-11</td>
                <td>
                  <span className="badge bg-warning">Pending</span>
                </td>
                <td>
                  <div className="btn-group gap-1">
                    <button className="btn btn-sm btn-success">Approve</button>
                    <button className="btn btn-sm btn-danger">Reject</button>
                  </div>
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
