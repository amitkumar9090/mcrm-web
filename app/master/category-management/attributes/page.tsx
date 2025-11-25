"use client";

import React, { useState } from "react";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";

const attributeData = [
  {
    id: 1,
    name: "Color",
    values: ["Red", "Blue", "Green", "Black"],
    status: "active",
  },
  {
    id: 2,
    name: "Size",
    values: ["S", "M", "L", "XL"],
    status: "active",
  },
  {
    id: 3,
    name: "Material",
    values: ["Cotton", "Leather", "Polyester"],
    status: "inactive",
  },
  {
    id: 4,
    name: "Storage Capacity",
    values: ["64GB", "128GB", "256GB"],
    status: "active",
  },
];

const Page = () => {
  const [search, setSearch] = useState("");

  const filtered = attributeData.filter((attr) =>
    attr.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">Attributes</h4>

        <button className="btn btn-primary d-flex align-items-center gap-2">
          <Plus size={18} />
          Add Attribute
        </button>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-text bg-white">
            <Search size={18} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search attributes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* TABLE CARD */}
      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Values</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((attr) => (
                <tr key={attr.id}>
                  {/* ATTRIBUTE NAME */}
                  <td className="fw-semibold">{attr.name}</td>

                  {/* ATTRIBUTE VALUES */}
                  <td>
                    {attr.values.map((v, idx) => (
                      <span
                        key={idx}
                        className="badge bg-secondary me-1 mb-1"
                      >
                        {v}
                      </span>
                    ))}
                  </td>

                  {/* STATUS */}
                  <td>
                    <span
                      className={`badge px-3 ${
                        attr.status === "active" ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {attr.status}
                    </span>
                  </td>

                  {/* ACTIONS */}
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
                  <td colSpan={4} className="text-center py-4 text-muted">
                    No attributes found.
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
