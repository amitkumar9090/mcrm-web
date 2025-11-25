"use client";

import React, { useState, useMemo } from "react";
// Note: You would likely need a CSS file for styling,
// similar to './delete-request.css' or using a framework's styles.

// 1. Define a type for the Seller data including approvalStatus
interface Seller {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  avatar: null;
  created_at: string;
  updated_at: string;
  status: "active" | "inactive";
  approvalStatus: "pending" | "approved" | "rejected"; // New status field
}

// 2. Updated Dummy data
const initialSellers: Seller[] = [
  {
    id: 1,
    name: "John Anderson (Seller)",
    email: "john.anderson@example.com",
    phone: "+1 555-0101",
    role: "New Seller",
    avatar: null,
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-11-18T14:22:00Z",
    status: "inactive",
    approvalStatus: "pending",
  },
  {
    id: 3,
    name: "Michael Chen (Store)",
    email: "michael.chen@example.com",
    phone: "+1 555-0103",
    role: "Existing Seller",
    avatar: null,
    created_at: "2024-03-10T11:20:00Z",
    updated_at: "2024-11-17T16:30:00Z",
    status: "active",
    approvalStatus: "approved", // Approved Seller
  },
  {
    id: 6,
    name: "Lisa Wang (Shop)",
    email: "lisa.wang@example.com",
    phone: "+1 555-0106",
    role: "New Seller",
    avatar: null,
    created_at: "2024-06-18T08:00:00Z",
    updated_at: "2024-11-16T14:50:00Z",
    status: "inactive",
    approvalStatus: "rejected", // Rejected Seller
  },
  {
    id: 7,
    name: "Robert Davis (Merchant)",
    email: "robert.davis@example.com",
    phone: "+1 555-0107",
    role: "New Seller",
    avatar: null,
    created_at: "2024-07-22T12:00:00Z",
    updated_at: "2024-11-19T10:05:00Z",
    status: "inactive",
    approvalStatus: "pending",
  },
  {
    id: 8,
    name: "Anna Green",
    email: "anna@example.com",
    phone: "+1 555-0108",
    role: "New Seller",
    avatar: null,
    created_at: "2024-10-01T15:00:00Z",
    updated_at: "2024-11-01T09:00:00Z",
    status: "inactive",
    approvalStatus: "pending",
  },
  {
    id: 9,
    name: "Tom Hardy",
    email: "tom@example.com",
    phone: "+1 555-0109",
    role: "Existing Seller",
    avatar: null,
    created_at: "2023-05-20T11:00:00Z",
    updated_at: "2024-11-10T12:00:00Z",
    status: "active",
    approvalStatus: "approved",
  },
  {
    id: 10,
    name: "Alice Blue",
    email: "alice@example.com",
    phone: "+1 555-0110",
    role: "New Seller",
    avatar: null,
    created_at: "2024-09-12T13:00:00Z",
    updated_at: "2024-11-05T15:00:00Z",
    status: "inactive",
    approvalStatus: "pending",
  },
  {
    id: 11,
    name: "Ben White",
    email: "ben@example.com",
    phone: "+1 555-0111",
    role: "New Seller",
    avatar: null,
    created_at: "2024-11-15T09:00:00Z",
    updated_at: "2024-11-15T09:00:00Z",
    status: "inactive",
    approvalStatus: "pending",
  },
];

// Users Table Component
function UsersTable() {
  const [users, setUsers] = useState<Seller[]>(initialSellers);
  const [activeDropdownId, setActiveDropdownId] = useState<number | null>(null);

  // --- New State for Data Features ---
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Seller | "";
    direction: "asc" | "desc";
  }>({ key: "", direction: "asc" });

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
    const parts = name.split(/[\s()]+/g).filter(Boolean);
    if (parts.length >= 2) {
      return parts[0][0] + parts[1][0];
    }
    return parts[0][0];
  };

  // --- Sorting Handler ---
  const handleSort = (key: keyof Seller) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // --- Action Handler Functions ---

  const handleAction = (id: number, action: "approved" | "rejected") => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              approvalStatus: action,
              updated_at: new Date().toISOString(),
            }
          : user
      )
    );
    // Close the dropdown after action
    setActiveDropdownId(null);
  };

  const handleApprove = (id: number) => {
    handleAction(id, "approved");
  };

  const handleReject = (id: number) => {
    handleAction(id, "rejected");
  };

  // --- Status Badge Utility ---

  const getApprovalStatusBadge = (approvalStatus: Seller["approvalStatus"]) => {
    let badgeClass = "bg-secondary";
    let statusText = "Pending";

    switch (approvalStatus) {
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

  // --- Data Processing with useMemo ---

  // 1. Filter data based on search term
  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.includes(searchTerm) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  // 2. Sort data
  const sortedUsers = useMemo(() => {
    let sortableUsers = [...filteredUsers];
    if (sortConfig.key) {
      sortableUsers.sort((a, b) => {
        // Simple string comparison for most fields
        const aValue = a[sortConfig.key] ?? "";
        const bValue = b[sortConfig.key] ?? "";

        if (aValue < bValue) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableUsers;
  }, [filteredUsers, sortConfig]);

  // 3. Paginate data
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * entriesPerPage;
    return sortedUsers.slice(startIndex, startIndex + entriesPerPage);
  }, [sortedUsers, currentPage, entriesPerPage]);

  const totalPages = Math.ceil(sortedUsers.length / entriesPerPage);

  // --- Component JSX ---

  return (
    <div className="content pb-0">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4>
          Seller Approval Requests
          <span className="badge bg-primary ms-2">
            {users.filter((u) => u.approvalStatus === "pending").length}
          </span>
        </h4>
      </div>

      <div className="card border-0 rounded-0">
        {/* Card Header with Search Input */}
        <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
          <input
            type="text"
            className="form-control"
            placeholder="Search sellers by name, email, phone..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset page on search
            }}
            style={{ maxWidth: "400px" }} // Added style for better control
          />
        </div>

        <div className="card-body">
          <div className="table-responsive custom-table">
            {/* Horizontal scroll wrapper: ensures last columns are reachable on narrow screens */}
            <div
              className="horizontal-scroll-wrapper"
              style={{ overflowX: "auto" }}
            >
              <style>{`
                .horizontal-scroll-wrapper { -webkit-overflow-scrolling: touch; scrollbar-gutter: stable both-edges; }
                .horizontal-scroll-wrapper::-webkit-scrollbar { height: 10px; }
                .horizontal-scroll-wrapper::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.25); border-radius: 6px; }
                /* Larger spacer so last column fully scrolls into view */
                .horizontal-scroll-wrapper::after { content: ''; display: inline-block; width: 88px; height: 1px; }
                /* Ensure table end isn't visually cut on some browsers */
                .horizontal-scroll-wrapper table { margin-right: 8px; }
              `}</style>
              <table
                className="table table-nowrap"
                style={{ minWidth: "1000px", marginRight: "18px" }}
              >
                <thead className="table-light">
                  <tr>
                    <th></th>
                    {/* Sortable Column: Seller Name */}
                    <th
                      onClick={() => handleSort("name")}
                      style={{ cursor: "pointer" }}
                    >
                      Seller Name{" "}
                      {sortConfig.key === "name" &&
                        (sortConfig.direction === "asc" ? "▲" : "▼")}
                    </th>
                    <th>Email</th>
                    <th>Phone</th>
                    {/* Sortable Column: Request Date */}
                    <th
                      onClick={() => handleSort("created_at")}
                      style={{ cursor: "pointer" }}
                    >
                      Request Date{" "}
                      {sortConfig.key === "created_at" &&
                        (sortConfig.direction === "asc" ? "▲" : "▼")}
                    </th>
                    {/* Sortable Column: Last Update */}
                    <th
                      onClick={() => handleSort("updated_at")}
                      style={{ cursor: "pointer" }}
                    >
                      Last Update{" "}
                      {sortConfig.key === "updated_at" &&
                        (sortConfig.direction === "asc" ? "▲" : "▼")}
                    </th>
                    <th>Approval Status</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedUsers.map((user) => (
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

                      <td>{getApprovalStatusBadge(user.approvalStatus)}</td>

                      {/* Action Column with Dropdown */}
                      {/* Action Column with Dropdown */}
                      <td className="text-end">
                        {user.approvalStatus === "pending" ? (
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
                            {user.approvalStatus === "approved"
                              ? "Approved"
                              : "Rejected"}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Show "No records found" if filtered/sorted data is empty */}
              {paginatedUsers.length === 0 && (
                <div className="text-center py-4">
                  <p className="text-muted">
                    No records found matching your criteria
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* --- Pagination Footer --- */}
          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <div className="datatable-length">
                <label>
                  Show
                  <select
                    className="form-select form-select-sm ms-2 me-2"
                    value={entriesPerPage}
                    onChange={(e) => {
                      setEntriesPerPage(Number(e.target.value));
                      setCurrentPage(1); // Reset page on change
                    }}
                    style={{ width: "auto", display: "inline-block" }}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                  </select>
                  entries (Total: {sortedUsers.length})
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="datatable-paginate">
                <nav>
                  <ul className="pagination pagination-sm justify-content-end">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <i className="ti ti-chevron-left"></i> Previous
                      </button>
                    </li>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <li
                          key={page}
                          className={`page-item ${
                            currentPage === page ? "active" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => setCurrentPage(page)}
                          >
                            {page}
                          </button>
                        </li>
                      )
                    )}

                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        Next <i className="ti ti-chevron-right"></i>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
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
