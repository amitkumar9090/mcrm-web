"use client";

import React, { useState, useMemo } from "react";

// ---------------------------
// INTERFACE
// ---------------------------
interface RestockItem {
  id: number;
  name: string;
  sku: string;
  vendor: string;
  currentStock: number;
  threshold: number;
  lastRestocked: string;
  updated_at: string;
}

// ---------------------------
// DUMMY DATA
// ---------------------------
const initialItems: RestockItem[] = [
  {
    id: 1,
    name: "A4 Paper Bundle",
    sku: "PAPER-A4-500",
    vendor: "Office Supplies Inc.",
    currentStock: 12,
    threshold: 50,
    lastRestocked: "2024-10-18T11:00:00Z",
    updated_at: "2024-11-20T15:00:00Z",
  },
  {
    id: 2,
    name: "Black Ink Cartridge",
    sku: "INK-BLK-01",
    vendor: "PrintHub",
    currentStock: 3,
    threshold: 20,
    lastRestocked: "2024-11-09T09:00:00Z",
    updated_at: "2024-11-19T10:00:00Z",
  },
  {
    id: 3,
    name: "Brown Box (Large)",
    sku: "BOX-L-20",
    vendor: "Packaging World",
    currentStock: 8,
    threshold: 40,
    lastRestocked: "2024-11-01T13:00:00Z",
    updated_at: "2024-11-18T14:00:00Z",
  },
];

// ---------------------------
// TABLE COMPONENT
// ---------------------------
function RestockingNeedsTable() {
  const [items] = useState<RestockItem[]>(initialItems);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const [sortConfig, setSortConfig] = useState<{
    key: keyof RestockItem | "";
    direction: "asc" | "desc";
  }>({ key: "", direction: "asc" });

  // ---------------------------
  // FORMATTERS
  // ---------------------------
  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
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

  const handleSort = (key: keyof RestockItem) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc")
      direction = "desc";
    setSortConfig({ key, direction });
  };

  // ---------------------------
  // FILTER + SORT + PAGINATION
  // ---------------------------
  const filtered = useMemo(() => {
    return items.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.vendor.toLowerCase().includes(searchTerm.toLowerCase())
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

  // ---------------------------
  // RENDER
  // ---------------------------
  return (
    <div className="content pb-0">
      <h4 className="mb-4">
        Restocking Needs{" "}
        <span className="badge bg-warning ms-2">{items.length}</span>
      </h4>

      <div className="card border-0 rounded-0">
        {/* SEARCH */}
        <div className="card-header">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name, SKU, vendor..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            style={{ maxWidth: "340px" }}
          />
        </div>

        <div className="card-body">
          {/* TABLE */}
          <div className="table-responsive">
            <table className="table table-nowrap">
              <thead>
                <tr>
                  <th></th>

                  <th
                    onClick={() => handleSort("name")}
                    style={{ cursor: "pointer" }}
                  >
                    Item Name{" "}
                    {sortConfig.key === "name" &&
                      (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                  </th>

                  <th>SKU</th>
                  <th>Vendor</th>

                  <th
                    onClick={() => handleSort("currentStock")}
                    style={{ cursor: "pointer" }}
                  >
                    Current Stock{" "}
                    {sortConfig.key === "currentStock" &&
                      (sortConfig.direction === "asc" ? " ▲" : " ▼")}
                  </th>

                  <th>Threshold</th>
                  <th>Last Restocked</th>

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
                    <td>{item.vendor}</td>

                    <td className={item.currentStock < item.threshold ? "text-danger fw-bold" : ""}>
                      {item.currentStock}
                    </td>

                    <td>{item.threshold}</td>

                    <td>{formatDate(item.lastRestocked)}</td>

                    <td>
                      <span className="badge bg-warning text-light">
                        Needs Restock
                      </span>
                    </td>
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

          {/* PAGINATION */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            {/* Entries */}
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

            {/* Page numbers */}
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

// ---------------------------
// EXPORT
// ---------------------------
export default function Page() {
  return <RestockingNeedsTable />;
}
