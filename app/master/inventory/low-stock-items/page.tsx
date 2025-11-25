"use client";

import React, { useState, useMemo } from "react";

// ---------------------------
// 1. Low Stock Interface
// ---------------------------
interface LowStockItem {
  id: number;
  name: string;
  sku: string;
  category: string;
  stock: number;
  threshold: number;
  created_at: string;
  updated_at: string;
  status: "critical" | "low";
}

// ---------------------------
// 2. Dummy Data
// ---------------------------
const initialLowStockItems: LowStockItem[] = [
  {
    id: 1,
    name: "Bluetooth Speaker",
    sku: "BSK-001",
    category: "Electronics",
    stock: 5,
    threshold: 10,
    created_at: "2024-10-21T10:00:00Z",
    updated_at: "2024-11-15T14:20:00Z",
    status: "critical",
  },
  {
    id: 2,
    name: "Smartwatch Series 4",
    sku: "SMW-110",
    category: "Wearables",
    stock: 3,
    threshold: 15,
    created_at: "2024-09-12T11:00:00Z",
    updated_at: "2024-11-14T09:10:00Z",
    status: "critical",
  },
  {
    id: 3,
    name: "USB-C Fast Charger",
    sku: "CHG-220",
    category: "Accessories",
    stock: 12,
    threshold: 20,
    created_at: "2024-08-15T13:00:00Z",
    updated_at: "2024-11-17T10:00:00Z",
    status: "low",
  },
  {
    id: 4,
    name: "RGB Gaming Mouse",
    sku: "GM-550",
    category: "Gaming",
    stock: 6,
    threshold: 12,
    created_at: "2024-07-05T14:00:00Z",
    updated_at: "2024-11-18T16:00:00Z",
    status: "low",
  },
];

// ---------------------------
// LOW STOCK TABLE
// ---------------------------
function LowStockTable() {
  const [items, setItems] = useState<LowStockItem[]>(initialLowStockItems);
  const [activeDropdownId, setActiveDropdownId] = useState<number | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const [sortConfig, setSortConfig] = useState<{
    key: keyof LowStockItem | "";
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

  const handleSort = (key: keyof LowStockItem) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getStockBadge = (status: LowStockItem["status"]) => {
    if (status === "critical") {
      return <span className="badge bg-danger">Critical</span>;
    }
    return <span className="badge bg-warning text-dark">Low</span>;
  };

  // -----------------------
  // Filtering + Sorting + Pagination
  // -----------------------
  const filtered = useMemo(() => {
    return items.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  const sorted = useMemo(() => {
    if (!sortConfig.key) return filtered;

    return [...filtered].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
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
        Low Stock Items{" "}
        <span className="badge bg-danger ms-2">
          {items.filter((i) => i.status === "critical").length}
        </span>
      </h4>

      <div className="card border-0 rounded-0">
        <div className="card-header">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name, SKU, category..."
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

                  <th
                    onClick={() => handleSort("name")}
                    style={{ cursor: "pointer" }}
                  >
                    Product Name{" "}
                    {sortConfig.key === "name" &&
                      (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                  </th>

                  <th>SKU</th>
                  <th>Category</th>

                  <th
                    onClick={() => handleSort("stock")}
                    style={{ cursor: "pointer" }}
                  >
                    Stock Left{" "}
                    {sortConfig.key === "stock" &&
                      (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                  </th>

                  <th>Threshold</th>

                  <th>Added On</th>
                  <th>Last Update</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {paginated.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <input type="checkbox" className="form-check-input" />
                    </td>

                    <td>
                      <strong>{item.name}</strong>
                    </td>

                    <td>{item.sku}</td>
                    <td>{item.category}</td>

                    <td>
                      {item.stock === 0 ? (
                        <span className="text-danger fw-bold">Out of Stock</span>
                      ) : (
                        item.stock
                      )}
                    </td>

                    <td>{item.threshold}</td>

                    <td>{formatDate(item.created_at)}</td>
                    <td>{formatTimeAgo(item.updated_at)}</td>

                    <td>{getStockBadge(item.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {paginated.length === 0 && (
              <div className="text-center py-4 text-muted">
                No items found
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
  return <LowStockTable />;
}
