"use client";

import React, { useState } from "react";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";

const variantData = [
  {
    id: 1,
    name: "Color",
    options: ["Red", "Blue", "Green", "Black"],
    status: "active",
  },
  {
    id: 2,
    name: "Size",
    options: ["S", "M", "L", "XL"],
    status: "active",
  },
  {
    id: 3,
    name: "Storage",
    options: ["64GB", "128GB", "256GB"],
    status: "inactive",
  },
  {
    id: 4,
    name: "Material",
    options: ["Cotton", "Leather", "Polyester"],
    status: "active",
  },
];

const Page = () => {
  const [search, setSearch] = useState("");

  const filtered = variantData.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">Variants</h4>

        <button className="btn btn-primary d-flex align-items-center gap-2">
          <Plus size={18} />
          Add Variant
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
            placeholder="Search variants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* VARIANTS TABLE */}
      <div className="card shadow-sm border-0">
        <div className="card-body p-0">

          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Variant Name</th>
                <th>Options</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((variant) => (
                <tr key={variant.id}>
                  {/* VARIANT NAME */}
                  <td className="fw-semibold">{variant.name}</td>

                  {/* VARIANT OPTIONS */}
                  <td>
                    {variant.options.map((opt, idx) => (
                      <span
                        key={idx}
                        className="badge bg-secondary me-1 mb-1"
                      >
                        {opt}
                      </span>
                    ))}
                  </td>

                  {/* STATUS */}
                  <td>
                    <span
                      className={`badge px-3 ${
                        variant.status === "active"
                          ? "bg-success"
                          : "bg-danger"
                      }`}
                    >
                      {variant.status}
                    </span>
                  </td>

                  {/* ACTION BUTTONS */}
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

              {/* NO DATA */}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-muted">
                    No variants found.
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
