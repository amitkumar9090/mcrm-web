"use client";

import React, { useState, useMemo } from "react";

// ---------------------------
// 1. Product Interface
// ---------------------------
interface Product {
  id: number;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  image: string | null;
  created_at: string;
  updated_at: string;
  approvalStatus: "pending" | "approved" | "rejected";
}

// ---------------------------
// 2. Dummy Product Data
// ---------------------------
const initialProducts: Product[] = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro",
    sku: "IP15-PRO-256",
    category: "Smartphones",
    price: 1299,
    stock: 42,
    image: null,
    created_at: "2024-11-01T10:00:00Z",
    updated_at: "2024-11-16T14:50:00Z",
    approvalStatus: "pending",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5 Headphones",
    sku: "SONY-XM5",
    category: "Electronics",
    price: 399,
    stock: 125,
    image: null,
    created_at: "2024-10-10T12:00:00Z",
    updated_at: "2024-11-15T10:00:00Z",
    approvalStatus: "approved",
  },
  {
    id: 3,
    name: "Nike Air Max 2024",
    sku: "NK-AMX-24",
    category: "Footwear",
    price: 199,
    stock: 0,
    image: null,
    created_at: "2024-09-14T11:00:00Z",
    updated_at: "2024-11-12T09:00:00Z",
    approvalStatus: "rejected",
  },
  {
    id: 4,
    name: "Samsung 55'' 4K Smart TV",
    sku: "SMSNG-TV55",
    category: "Home Appliances",
    price: 699,
    stock: 13,
    image: null,
    created_at: "2024-08-20T15:00:00Z",
    updated_at: "2024-11-17T11:00:00Z",
    approvalStatus: "pending",
  },
];

// ---------------------------
// PRODUCT TABLE COMPONENT
// ---------------------------
function ProductTable() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [activeDropdownId, setActiveDropdownId] = useState<number | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const [sortConfig, setSortConfig] = useState<{
    key: keyof Product | "";
    direction: "asc" | "desc";
  }>({ key: "", direction: "asc" });

  // -----------------------
  // Utility Functions
  // -----------------------
  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} mins ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    return `${Math.floor(diff / 86400)} days ago`;
  };

  const handleSort = (key: keyof Product) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleAction = (id: number, action: "approved" | "rejected") => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, approvalStatus: action, updated_at: new Date().toISOString() }
          : p
      )
    );
    setActiveDropdownId(null);
  };

  const getApprovalStatusBadge = (status: Product["approvalStatus"]) => {
    let className = "bg-warning text-dark";
    let label = "Pending";

    if (status === "approved") {
      className = "bg-success";
      label = "Approved";
    } else if (status === "rejected") {
      className = "bg-danger";
      label = "Rejected";
    }

    return <span className={`badge ${className}`}>{label}</span>;
  };

  // -----------------------
  // Data Processing
  // -----------------------
  const filtered = useMemo(() => {
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const sorted = useMemo(() => {
    if (!sortConfig.key) return filtered;
    const sortedData = [...filtered].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sortedData;
  }, [filtered, sortConfig]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return sorted.slice(start, start + entriesPerPage);
  }, [sorted, currentPage, entriesPerPage]);

  const totalPages = Math.ceil(sorted.length / entriesPerPage);

  // -----------------------
  // JSX
  // -----------------------
  return (
    <div className="content pb-0">
      <h4 className="mb-4">
        All Products{" "}
        <span className="badge bg-primary ms-2">
          {products.filter((p) => p.approvalStatus === "pending").length}
        </span>
      </h4>

      <div className="card border-0 rounded-0">
        <div className="card-header">
          <input
            type="text"
            className="form-control"
            placeholder="Search products by name, SKU, category..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            style={{ maxWidth: "340px" }}
          />
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-nowrap">
              <thead>
                <tr>
                  <th></th>

                  <th onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>
                    Product Name
                    {sortConfig.key === "name" &&
                      (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                  </th>

                  <th>SKU</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>

                  <th
                    onClick={() => handleSort("created_at")}
                    style={{ cursor: "pointer" }}
                  >
                    Added On
                    {sortConfig.key === "created_at" &&
                      (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                  </th>

                  <th>Last Update</th>
                  <th>Status</th>

                  <th className="text-end">Action</th>
                </tr>
              </thead>

              <tbody>
                {paginated.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <input type="checkbox" className="form-check-input" />
                    </td>

                    <td>
                      <strong>{product.name}</strong>
                    </td>

                    <td>{product.sku}</td>
                    <td>{product.category}</td>
                    <td>${product.price}</td>
                    <td>{product.stock === 0 ? "Out of Stock" : product.stock}</td>
                    <td>{formatDate(product.created_at)}</td>
                    <td>{formatTimeAgo(product.updated_at)}</td>

                    <td>{getApprovalStatusBadge(product.approvalStatus)}</td>

                    <td className="text-end">
                      {product.approvalStatus === "pending" ? (
                        <div className="dropdown" style={{ position: "relative" }}>
                          <button
                            className="btn btn-outline-light btn-sm"
                            onClick={() =>
                              setActiveDropdownId(
                                activeDropdownId === product.id ? null : product.id
                              )
                            }
                          >
                            ⋮
                          </button>

                          {activeDropdownId === product.id && (
                            <div
                              className="dropdown-menu show"
                              style={{
                                position: "absolute",
                                right: 0,
                                zIndex: 1000,
                              }}
                            >
                              <button
                                className="dropdown-item"
                                onClick={() => handleAction(product.id, "approved")}
                              >
                                Approve
                              </button>

                              <button
                                className="dropdown-item text-danger"
                                onClick={() => handleAction(product.id, "rejected")}
                              >
                                Reject
                              </button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <button className="btn btn-sm btn-outline-secondary" disabled>
                          {product.approvalStatus === "approved"
                            ? "Approved"
                            : "Rejected"}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {paginated.length === 0 && (
              <div className="text-center py-4 text-muted">
                No products found
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              Show{" "}
              <select
                className="form-select d-inline-block w-auto"
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
              </select>{" "}
              entries
            </div>

            <ul className="pagination pagination-sm mb-0">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </button>
              </li>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <li
                  key={p}
                  className={`page-item ${currentPage === p ? "active" : ""}`}
                >
                  <button className="page-link" onClick={() => setCurrentPage(p)}>
                    {p}
                  </button>
                </li>
              ))}

              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return <ProductTable />;
}
