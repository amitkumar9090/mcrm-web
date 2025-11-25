"use client";

import React, { useState } from "react";

// Dummy data for KYC Verification
const dummyKyc = [
  {
    id: 1,
    name: "John Anderson",
    email: "john.anderson@example.com",
    phone: "+1 555-0101",
    kyc_type: "Aadhaar",
    document_no: "XXXX-XXXX-1234",
    submitted_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-11-18T14:22:00Z",
    status: "pending",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    email: "sarah.mitchell@example.com",
    phone: "+1 555-0102",
    kyc_type: "PAN",
    document_no: "ABCDE1234F",
    submitted_at: "2024-02-20T09:15:00Z",
    updated_at: "2024-11-19T08:45:00Z",
    status: "approved",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    phone: "+1 555-0103",
    kyc_type: "GST",
    document_no: "27ABCDE1234F1Z5",
    submitted_at: "2024-03-10T11:20:00Z",
    updated_at: "2024-11-17T16:30:00Z",
    status: "rejected",
  },
];

// Users Table Component
function UsersTable() {
  const [users] = useState(dummyKyc);

  // Format date
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return (
      date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }) +
      ", " +
      date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    );
  };

  // Get initials
  const getInitials = (name: string) => {
    if (!name) return "U";
    const parts = name.split(" ");
    return parts.length >= 2
      ? parts[0][0] + parts[1][0]
      : parts[0][0];
  };

  return (
    <div className="content pb-0">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4>
          KYC Verification
          <span className="badge bg-primary ms-2">{users.length}</span>
        </h4>
      </div>

      <div className="card border-0 rounded-0">
        <div className="card-header d-flex justify-content-between">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search KYC..."
          />
          {/* <button className="btn btn-primary">Add KYC</button> */}
        </div>

        <div className="card-body">
          <div className="table-responsive custom-table">
            <table className="table table-nowrap">
              <thead className="table-light">
                <tr>
                  <th></th>
                  <th>Seller</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>KYC Type</th>
                  <th>Document No.</th>
                  <th>Submitted On</th>
                  <th>Status</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <input type="checkbox" className="form-check-input" />
                    </td>

                    <td>
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-rounded me-2">
                          <span className="avatar-title bg-primary text-white rounded-circle">
                            {getInitials(user.name)}
                          </span>
                        </span>
                        <div>
                          <strong>{user.name}</strong>
                          <div className="text-muted small">{user.kyc_type}</div>
                        </div>
                      </div>
                    </td>

                    <td>{user.email}</td>
                    <td>{user.phone}</td>

                    <td>{user.kyc_type}</td>
                    <td>{user.document_no}</td>

                    <td>{formatDate(user.submitted_at)}</td>

                    <td>
                      <span
                        className={`badge ${
                          user.status === "approved"
                            ? "bg-success"
                            : user.status === "pending"
                            ? "bg-warning"
                            : "bg-danger"
                        }`}
                      >
                        {user.status.charAt(0).toUpperCase() +
                          user.status.slice(1)}
                      </span>
                    </td>

                    <td className="text-end">
                      <button style={{border: "0.2px solid #e8e8e8", borderRadius: "3px", background: "#fff"}}>
                        ⋮
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// FINAL PAGE EXPORT
export default function Page() {
  return (
    <div>
      <UsersTable />
    </div>
  );
}
