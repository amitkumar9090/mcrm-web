"use client";

import React, { useState } from "react";
import { Dropdown } from "react-bootstrap"; // Assuming you have react-bootstrap or a similar library for dropdowns

// Helper for random data
const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Custom Seller Dummy Data
const dummySellers = [
  {
    id: 101,
    sellerName: "TechGadget Hub",
    email: "contact@techgadgethub.com",
    phone: "+1 202-555-0145",
    storeName: "TGH Store",
    kycStatus: "Verified",
    totalProducts: generateRandomNumber(50, 500),
    created_at: "2023-10-25T08:15:00Z",
    lastActivity_at: "2025-11-20T10:30:00Z",
    status: "Active",
  },
  {
    id: 102,
    sellerName: "Fashion Finesse Co.",
    email: "support@fashionfinesse.net",
    phone: "+44 20 7946 0123",
    storeName: "FFC Trends",
    kycStatus: "Pending",
    totalProducts: generateRandomNumber(10, 150),
    created_at: "2024-01-10T14:30:00Z",
    lastActivity_at: "2025-11-18T18:22:00Z",
    status: "Suspended",
  },
  {
    id: 103,
    sellerName: "Bookworm Bazaar",
    email: "sales@bookwormbazaar.org",
    phone: "+61 2 9876 5432",
    storeName: "BB Books",
    kycStatus: "Verified",
    totalProducts: generateRandomNumber(1000, 5000),
    created_at: "2023-05-01T11:00:00Z",
    lastActivity_at: "2025-11-19T09:45:00Z",
    status: "Active",
  },
  {
    id: 104,
    sellerName: "Home Decor Delights",
    email: "info@homedecordelights.com",
    phone: "+49 30 1234 5678",
    storeName: "HDD Living",
    kycStatus: "Rejected",
    totalProducts: generateRandomNumber(5, 50),
    created_at: "2024-07-15T09:20:00Z",
    lastActivity_at: "2025-11-15T12:00:00Z",
    status: "Inactive",
  },
  {
    id: 105,
    sellerName: "Art Supplies World",
    email: "hello@artsuppliesworld.com",
    phone: "+33 1 23 45 67 89",
    storeName: "ASW Art",
    kycStatus: "Verified",
    totalProducts: generateRandomNumber(200, 1000),
    created_at: "2023-12-01T16:40:00Z",
    lastActivity_at: "2025-11-20T08:05:00Z",
    status: "Active",
  },
];

// Sellers List Component
function SellersList() {
  const [sellers] = useState(dummySellers);

  // Format date
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    // Use an India-specific locale to match the current location's format, or a standard format
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Format time ago (simplified for display)
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
    // If older than a week, show the full date
    return formatDate(dateString);
  };

  // Get initials
  const getInitials = (name: string) => {
    if (!name) return "U";
    const parts = name.split(/\s+/).filter(Boolean); // Split by one or more spaces and filter out empty strings
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0][0].toUpperCase();
  };

  // Get status badge class
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success";
      case "Inactive":
        return "bg-secondary";
      case "Suspended":
        return "bg-danger";
      default:
        return "bg-primary"; // Fallback
    }
  };

  // Get KYC status badge class
  const getKycBadgeClass = (status: string) => {
    switch (status) {
      case "Verified":
        return "bg-info";
      case "Pending":
        return "bg-warning";
      case "Rejected":
        return "bg-danger";
      default:
        return "bg-secondary"; // Fallback
    }
  };

  return (
    <div className="content pb-0">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4>
          Sellers List
          <span className="badge bg-primary ms-2">{sellers.length}</span>
        </h4>
      </div>

      <div className="card border-0 rounded-0">
        <div className="card-header d-flex justify-content-between">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search sellers..."
          />
          {/* <button className="btn btn-primary">Add Seller</button> */}
        </div>

        <div className="card-body">
          <div className="table-responsive custom-table">
            <div
              className="horizontal-scroll-wrapper"
              style={{ overflowX: "auto" }}
            >
              <style>{`
                .horizontal-scroll-wrapper { -webkit-overflow-scrolling: touch; scrollbar-gutter: stable both-edges; }
                .horizontal-scroll-wrapper::-webkit-scrollbar { height: 10px; }
                .horizontal-scroll-wrapper::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.25); border-radius: 6px; }
                /* Larger spacer so last column fully scrolls into view */
                .horizontal-scroll-wrapper::after { content: ''; display: inline-block; width: 140px; height: 1px; }
                /* Ensure table end isn't visually cut on some browsers */
                .horizontal-scroll-wrapper table { margin-right: 12px; }
                /* Add extra right padding on the last column cells and headers to avoid clipping */
                .horizontal-scroll-wrapper th:last-child,
                .horizontal-scroll-wrapper td:last-child {
                  padding-right: 18px !important;
                }
              `}</style>

              <table
                className="table table-nowrap"
                style={{ minWidth: "1000px", marginRight: "18px" }}
              >
                <thead className="table-light">
                  <tr>
                    <th></th>
                    <th>Seller</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Store Name</th>
                    <th>KYC Status</th>
                    <th>Total Products</th>
                    <th>Created</th>
                    <th>Last Activity</th>
                    <th>Status</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {sellers.map((seller) => (
                    <tr key={seller.id}>
                      <td>
                        <input type="checkbox" className="form-check-input" />
                      </td>

                      <td>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-rounded me-2">
                            <span className="avatar-title bg-info text-white rounded-circle">
                              {getInitials(seller.sellerName)}
                            </span>
                          </span>
                          <div>
                            <strong>{seller.sellerName}</strong>
                            <div className="text-muted small">
                              ID: {seller.id}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>{seller.email}</td>
                      <td>{seller.phone}</td>
                      <td>{seller.storeName}</td>

                      <td>
                        <span
                          className={`badge ${getKycBadgeClass(
                            seller.kycStatus
                          )}`}
                        >
                          {seller.kycStatus}
                        </span>
                      </td>

                      <td>{seller.totalProducts}</td>
                      <td>{formatDate(seller.created_at)}</td>
                      <td>{formatTimeAgo(seller.lastActivity_at)}</td>

                      <td>
                        <span
                          className={`badge ${getStatusBadgeClass(
                            seller.status
                          )}`}
                        >
                          {seller.status}
                        </span>
                      </td>

                      <td className="text-end">
                        {/* Using a simple button for action, replace with Dropdown/context menu as needed */}
                        <button className="btn btn-sm btn-outline-secondary">
                          <i className="bi bi-three-dots-vertical"></i>{" "}
                          {/* Assuming Bootstrap Icons */}⋮
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
    </div>
  );
}

// FINAL PAGE EXPORT
export default function Page() {
  return (
    <div>
      <SellersList />
    </div>
  );
}
