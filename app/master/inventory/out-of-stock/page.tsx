"use client";

import React, { useState, useMemo } from "react";

// ---------------------------
// PRODUCT INTERFACE
// ---------------------------
interface Product {
  id: number;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  created_at: string;
  updated_at: string;
}

// ---------------------------
// DUMMY OUT-OF-STOCK DATA
// ---------------------------
const initialProducts: Product[] = [
  {
    id: 1,
    name: "Logitech MX Master 4 Mouse",
    sku: "LOGI-MX4",
    category: "Accessories",
    price: 129,
    stock: 0,
    created_at: "2024-09-18T10:00:00Z",
    updated_at: "2024-11-18T15:00:00Z",
  },
  {
    id: 2,
    name: "Dell UltraSharp 27” Monitor",
    sku: "DELL-U27",
    category: "Monitors",
    price: 399,
    stock: 0,
    created_at: "2024-10-02T12:00:00Z",
    updated_at: "2024-11-19T14:00:00Z",
  },
  {
    id: 3,
    name: "Apple Magic Keyboard",
    sku: "APL-MAGKEY",
    category: "Accessories",
    price: 149,
    stock: 0,
    created_at: "2024-09-01T11:00:00Z",
    updated_at: "2024-11-10T10:00:00Z",
  },
];

// ---------------------------
// OUT OF STOCK TABLE
// ---------------------------
function OutOfStockTable() {
  const [products] = useState<Product[]>(initialProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const [sortConfig, setSortConfig] = useState<{
    key: keyof Product | "";
    direction: "asc" | "desc";
  }>({ key: "", direction: "asc" });

  // -----------------------
  // UTILS
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

  // -----------------------
  // FILTER + SORT + PAGINATE
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
  // JSX RENDER
  // -----------------------
  return (
    <div className="content pb-0">
      <h4 className="mb-4">
        Out-of-Stock Products{" "}
        <span className="badge bg-danger ms-2">
          {products.length}
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
                </tr>
              </thead>

              <tbody>
                {paginated.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <input type="checkbox" className="form-check-input" />
                    </td>

                    <td><strong>{product.name}</strong></td>
                    <td>{product.sku}</td>
                    <td>{product.category}</td>
                    <td>${product.price}</td>

                    <td>{formatDate(product.created_at)}</td>
                    <td>{formatTimeAgo(product.updated_at)}</td>

                    <td>
                      <span className="badge bg-danger">Out of Stock</span>
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
                className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
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
// EXPORT PAGE COMPONENT
// ---------------------------
export default function Page() {
  return <OutOfStockTable />;
}
