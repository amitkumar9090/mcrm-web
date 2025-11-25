'use client';

import React from 'react';
import { Download, FileText, Search } from 'lucide-react';

const page = () => {
  return (
    <div className="container py-4">

      <h1 className="mb-4 fw-bold">Invoice Generator</h1>

      {/* Search Filters */}
      <div className="card shadow-sm mb-4">
        <div className="card-header fw-semibold">Search Orders</div>

        <div className="card-body">
          <div className="row g-3">

            <div className="col-md-4">
              <label className="form-label">Order ID</label>
              <input type="text" className="form-control" placeholder="Enter order ID" />
            </div>

            <div className="col-md-4">
              <label className="form-label">Customer Email</label>
              <input type="email" className="form-control" placeholder="example@gmail.com" />
            </div>

            <div className="col-md-4 d-flex align-items-end">
              <button className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2">
                <Search size={18} /> Search
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Invoice Table */}
      <div className="card shadow-sm">
        <div className="card-header fw-semibold">Order List</div>

        <div className="card-body p-0">
          <table className="table table-bordered table-hover m-0">
            <thead className="table-light">
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Invoice</th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3].map((item) => (
                <tr key={item}>
                  <td>ORD-10{item}</td>
                  <td>John Doe</td>
                  <td>$250</td>
                  <td>2025-01-21</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1">
                        <FileText size={16} /> View
                      </button>

                      <button className="btn btn-primary btn-sm d-flex align-items-center gap-1">
                        <Download size={16} /> Download
                      </button>
                    </div>
                  </td>
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
