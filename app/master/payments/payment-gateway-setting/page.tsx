'use client';

import React from 'react';

const page = () => {
  return (
    <div className="container py-4">

      {/* Page Title */}
      <h4 className="fw-bold mb-4">Payment Gateway Settings</h4>

      {/* Payment Settings Card */}
      <div className="card shadow-sm mb-4">
        <div className="card-header fw-semibold">Configure Gateways</div>

        <div className="card-body">
          <form>

            {/* Gateway Name */}
            <div className="mb-3">
              <label htmlFor="gatewayName" className="form-label">
                Gateway Name
              </label>
              <input
                type="text"
                id="gatewayName"
                className="form-control"
                placeholder="e.g., Stripe, PayPal"
              />
            </div>

            {/* API Key */}
            <div className="mb-3">
              <label htmlFor="apiKey" className="form-label">
                API Key
              </label>
              <input
                type="text"
                id="apiKey"
                className="form-control"
                placeholder="Enter API Key"
              />
            </div>

            {/* Secret Key */}
            <div className="mb-3">
              <label htmlFor="secretKey" className="form-label">
                Secret Key
              </label>
              <input
                type="password"
                id="secretKey"
                className="form-control"
                placeholder="Enter Secret Key"
              />
            </div>

            {/* Mode Selection */}
            <div className="mb-3">
              <label className="form-label">Mode</label>
              <select className="form-select">
                <option value="live">Live</option>
                <option value="sandbox">Sandbox</option>
              </select>
            </div>

            {/* Status Toggle */}
            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="gatewayStatus"
              />
              <label className="form-check-label" htmlFor="gatewayStatus">
                Enable Gateway
              </label>
            </div>

            {/* Save Button */}
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                Save Settings
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Optional: List of Configured Gateways */}
      <div className="card shadow-sm">
        <div className="card-header fw-semibold">Configured Gateways</div>
        <div className="card-body p-0">
          <table className="table table-hover m-0">
            <thead className="table-light">
              <tr>
                <th>Gateway</th>
                <th>Mode</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Stripe</td>
                <td>Live</td>
                <td><span className="badge bg-success">Enabled</span></td>
                <td>
                  <button className="btn btn-sm btn-outline-secondary">Edit</button>
                </td>
              </tr>
              <tr>
                <td>PayPal</td>
                <td>Sandbox</td>
                <td><span className="badge bg-danger">Disabled</span></td>
                <td>
                  <button className="btn btn-sm btn-outline-secondary">Edit</button>
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
