"use client";

import React, { useState } from "react";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";

const subCategoriesData = [
  {
    id: 1,
    name: "Mobile Phones",
    category: "Electronics",
    products: 86,
    status: "active",
  },
  {
    id: 2,
    name: "Gaming Laptops",
    category: "Electronics",
    products: 22,
    status: "active",
  },
  {
    id: 3,
    name: "Men's Shoes",
    category: "Fashion",
    products: 40,
    status: "inactive",
  },
  {
    id: 4,
    name: "Cookware",
    category: "Home & Kitchen",
    products: 17,
    status: "active",
  },
];

const Page = () => {
  const [search, setSearch] = useState("");

  const filtered = subCategoriesData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">Sub-Categories</h4>

        <button className="btn btn-primary d-flex align-items-center gap-2">
          <Plus size={18} />
          Add Sub-Category
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-text bg-white">
            <Search size={18} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search sub-categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Products</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <td className="fw-semibold">{item.name}</td>

                  <td>
                    <span className="badge bg-secondary">{item.category}</span>
                  </td>

                  <td>{item.products}</td>

                  <td>
                    <span
                      className={`badge px-3 ${
                        item.status === "active" ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-primary me-2">
                      <Pencil size={16} />
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-muted">
                    No sub-categories found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
