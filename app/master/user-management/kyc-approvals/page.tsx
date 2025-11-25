"use client";

import React, { useState, useMemo } from "react";

// Define a type for the user data to include the new kycStatus field
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  avatar: null;
  created_at: string;
  updated_at: string;
  status: "active" | "inactive";
  kycStatus: "pending" | "approved" | "rejected"; // Added kycStatus
}

// Dummy data
const initialUsers: User[] = [
  {
    id: 1,
    name: "John Anderson",
    email: "john.anderson@example.com",
    phone: "+1 555-0101",
    role: "Administrator",
    avatar: null,
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-11-18T14:22:00Z",
    status: "active",
    kycStatus: "pending",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    email: "sarah.mitchell@example.com",
    phone: "+1 555-0102",
    role: "Editor",
    avatar: null,
    created_at: "2024-02-20T09:15:00Z",
    updated_at: "2024-11-19T08:45:00Z",
    status: "active",
    kycStatus: "pending",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    phone: "+1 555-0103",
    role: "Viewer",
    avatar: null,
    created_at: "2024-03-10T11:20:00Z",
    updated_at: "2024-11-17T16:30:00Z",
    status: "inactive",
    kycStatus: "rejected", // Changed for variety
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    phone: "+1 555-0104",
    role: "Administrator",
    avatar: null,
    created_at: "2024-04-05T13:45:00Z",
    updated_at: "2024-11-19T11:15:00Z",
    status: "active",
    kycStatus: "approved",
  },
  {
    id: 5,
    name: "David Thompson",
    email: "david.thompson@example.com",
    phone: "+1 555-0105",
    role: "Editor",
    avatar: null,
    created_at: "2024-05-12T15:30:00Z",
    updated_at: "2024-11-18T09:20:00Z",
    status: "active",
    kycStatus: "pending",
  },
  {
    id: 6,
    name: "Lisa Wang",
    email: "lisa.wang@example.com",
    phone: "+1 555-0106",
    role: "Viewer",
    avatar: null,
    created_at: "2024-06-18T08:00:00Z",
    updated_at: "2024-11-16T14:50:00Z",
    status: "inactive",
    kycStatus: "pending",
  },
];

// Users Table Component
function UsersTable() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  // State to track which dropdown is open (by User ID)
  const [activeDropdownId, setActiveDropdownId] = useState<number | null>(null);
  // Search input state
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Memoized filtered users based on search term (case-insensitive)
  const filteredUsers = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return users;
    return users.filter((u) => {
      return (
        (u.name && u.name.toLowerCase().includes(q)) ||
        (u.email && u.email.toLowerCase().includes(q)) ||
        (u.phone && u.phone.toLowerCase().includes(q)) ||
        (u.role && u.role.toLowerCase().includes(q))
      );
    });
  }, [users, searchTerm]);

  // Toggle dropdown state
  const toggleDropdown = (id: number) => {
    setActiveDropdownId(activeDropdownId === id ? null : id);
  };

  // --- Utility Functions (formatDate, formatTimeAgo, getInitials remain the same) ---

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

  const formatTimeAgo = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600)
      return `${Math.floor(diffInSeconds / 60)} mins ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800)
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    return formatDate(dateString);
  };

  const getInitials = (name: string) => {
    if (!name) return "U";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return parts[0][0] + parts[1][0];
    }
    return parts[0][0];
  };

  // --- Action Handler Functions ---

  const handleAction = (id: number, action: "approved" | "rejected") => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, kycStatus: action } : user
      )
    );
    // Close the dropdown after action
    setActiveDropdownId(null);
    console.log(`User ${id} ${action}`);
  };

  const handleApprove = (id: number) => {
    handleAction(id, "approved");
  };

  const handleReject = (id: number) => {
    handleAction(id, "rejected");
  };

  // --- Status Badge Utility ---

  const getKycStatusBadge = (kycStatus: User["kycStatus"]) => {
    let badgeClass = "bg-secondary";
    let statusText = "Pending";

    switch (kycStatus) {
      case "approved":
        badgeClass = "bg-success";
        statusText = "Approved";
        break;
      case "rejected":
        badgeClass = "bg-danger";
        statusText = "Rejected";
        break;
      case "pending":
      default:
        badgeClass = "bg-warning text-light";
        statusText = "Pending";
        break;
    }

    return <span className={`badge ${badgeClass}`}>{statusText}</span>;
  };

  // --- Component JSX ---

  return (
    <div className="content pb-0">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4>
          KYC Approvals
          <span className="badge bg-primary ms-2">{filteredUsers.length}</span>
        </h4>
      </div>

      <div className="card border-0 rounded-0">
        <div className="card-header d-flex justify-content-between">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="card-body">
          <div className="table-responsive custom-table">
            <table className="table table-nowrap">
              <thead className="table-light">
                <tr>
                  <th></th>
                  <th>User </th>
                  <th>User Email</th>
                  <th>Phone</th>
                  <th>Submission Date</th>
                  <th>Last Update</th>
                  <th>KYC Status</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((user) => (
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
                          <div className="text-muted small">{user.role}</div>
                        </div>
                      </div>
                    </td>

                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{formatDate(user.created_at)}</td>
                    <td>{formatTimeAgo(user.updated_at)}</td>

                    {/* Display the KYC Status */}
                    <td>{getKycStatusBadge(user.kycStatus)}</td>

                    {/* Action Column with Dropdown */}
                    <td className="text-end">
                      {user.kycStatus === "pending" ? (
                        <div
                          className="dropdown table-action"
                          style={{
                            position: "relative",
                            display: "inline-block",
                          }}
                        >
                          <button
                            className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                            onClick={() => toggleDropdown(user.id)}
                            aria-expanded={activeDropdownId === user.id}
                            style={{
                              // Use a standard icon or simple dots, assuming 'ti ti-dots-vertical' is available
                              fontSize: "18px", // Adjust size if needed
                              lineHeight: 1,
                            }}
                          >
                            &#8942; {/* Vertical Ellipsis Unicode */}
                          </button>

                          {activeDropdownId === user.id && (
                            <div
                              className="dropdown-menu dropdown-menu-right show"
                              style={{
                                position: "absolute",
                                right: 0,
                                minWidth: "160px",
                                backgroundColor: "#fff",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                zIndex: 1000,
                                textAlign: "left",
                                // Basic styling for the menu container
                                padding: "5px 0",
                              }}
                            >
                              <button
                                type="button"
                                className="dropdown-item w-100 text-start"
                                onClick={() => handleApprove(user.id)}
                                style={{
                                  display: "block",
                                  width: "100%",
                                  textAlign: "left",
                                  padding: "8px 12px",
                                  border: "none",
                                  background: "transparent",
                                  color: "inherit",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="ti ti-check"
                                  style={{ marginRight: "8px" }}
                                ></i>
                                Approve
                              </button>
                              <button
                                type="button"
                                className="dropdown-item w-100 text-start"
                                onClick={() => handleReject(user.id)}
                                style={{
                                  display: "block",
                                  width: "100%",
                                  textAlign: "left",
                                  padding: "8px 12px",
                                  border: "none",
                                  background: "transparent",
                                  color: "red",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="ti ti-x"
                                  style={{ marginRight: "8px" }}
                                ></i>
                                Reject
                              </button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          disabled
                        >
                          {user.kycStatus === "approved"
                            ? "Approved"
                            : "Rejected"}
                        </button>
                      )}
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
