'use client';

import React from 'react';
import { Search, Filter, ArrowUpRight, ArrowDownLeft } from "lucide-react";

const page = () => {
  return (
    <div className="container py-4">

      {/* Page Title */}
      <h4 className="fw-bold mb-4">All Transactions</h4>

      {/* Filters Section */}
      <div className="card shadow-sm mb-4">
        <div className="card-header fw-semibold">Filter Transactions</div>

        <div className="card-body">
          <div className="row g-3">

            <div className="col-md-4">
              <label className="form-label">Transaction ID</label>
              <input type="text" className="form-control" placeholder="Enter ID" />
            </div>

            <div className="col-md-4">
              <label className="form-label">User Email</label>
              <input type="email" className="form-control" placeholder="example@gmail.com" />
            </div>

            <div className="col-md-4">
              <label className="form-label">Type</label>
              <select className="form-select">
                <option>All</option>
                <option>Credit</option>
                <option>Debit</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Status</label>
              <select className="form-select">
                <option>All</option>
                <option>Success</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Date From</label>
              <input type="date" className="form-control" />
            </div>

            <div className="col-md-4">
              <label className="form-label">Date To</label>
              <input type="date" className="form-control" />
            </div>

            <div className="col-md-12 d-flex justify-content-end mt-3">
              <button className="btn btn-primary d-flex align-items-center gap-2">
                <Search size={18} /> Search
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="card shadow-sm">
        <div className="card-header fw-semibold d-flex align-items-center justify-content-between">
          <span>Transaction List</span>
          <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1">
            <Filter size={16} /> Sort
          </button>
        </div>

        <div className="card-body p-0">
          <table className="table table-hover table-bordered m-0">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {/* Dummy rows */}
              {[1, 2, 3, 4].map((i) => (
                <tr key={i}>
                  <td>TXN-00{i}</td>
                  <td>john.doe@example.com</td>
                  <td>$ {(i * 50).toFixed(2)}</td>
                  <td>
                    {i % 2 === 0 ? (
                      <span className="badge bg-success d-flex align-items-center gap-1">
                        <ArrowUpRight size={14} /> Credit
                      </span>
                    ) : (
                      <span className="badge bg-danger d-flex align-items-center gap-1">
                        <ArrowDownLeft size={14} /> Debit
                      </span>
                    )}
                  </td>

                  <td>
                    {i === 1 ? (
                      <span className="badge bg-warning text-dark">Pending</span>
                    ) : i === 2 ? (
                      <span className="badge bg-success">Success</span>
                    ) : (
                      <span className="badge bg-danger">Failed</span>
                    )}
                  </td>

                  <td>2025-01-21</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default page;
