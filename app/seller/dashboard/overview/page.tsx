"use client";

import React from "react";

const Page = () => {
  return (
    <div className="container py-4">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="m-0">Overview</h2>
        <button className="btn btn-primary">Download Report</button>
      </div>

      {/* Summary Cards */}
      <div className="row g-3 mb-4">

        <div className="col-md-3">
          <div className="card p-3 shadow-sm text-center">
            <h6>Total Users</h6>
            <h3 className="fw-bold">12,480</h3>
            <span className="text-success small">+12% this month</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm text-center">
            <h6>Total Orders</h6>
            <h3 className="fw-bold">3,240</h3>
            <span className="text-primary small">+5% growth</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm text-center">
            <h6>Revenue</h6>
            <h3 className="fw-bold">₹4,80,000</h3>
            <span className="text-success small">+18% increase</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm text-center">
            <h6>Pending Requests</h6>
            <h3 className="fw-bold">42</h3>
            <span className="text-danger small">Needs attention</span>
          </div>
        </div>

      </div>

      {/* Chart & Stats Section */}
      <div className="row g-3 mb-4">

        <div className="col-md-8">
          <div className="card shadow-sm" style={{ height: "320px" }}>
            <div className="card-header bg-white">
              <h5 className="mb-0">Monthly Sales Overview</h5>
            </div>
            <div className="card-body d-flex justify-content-center align-items-center">
              {/* Chart Placeholder */}
              <span className="text-muted">[Sales Chart Placeholder]</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm" style={{ height: "320px" }}>
            <div className="card-header bg-white">
              <h5 className="mb-0">User Growth</h5>
            </div>
            <div className="card-body d-flex justify-content-center align-items-center">
              {/* Chart Placeholder */}
              <span className="text-muted">[User Growth Pie Chart]</span>
            </div>
          </div>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h5 className="mb-0">Recent Activity</h5>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span>New user <strong>Riya Sharma</strong> registered.</span>
            <span className="text-muted small">2 hours ago</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Order <strong>#1043</strong> has been delivered.</span>
            <span className="text-muted small">5 hours ago</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Admin updated system settings.</span>
            <span className="text-muted small">1 day ago</span>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Page;
