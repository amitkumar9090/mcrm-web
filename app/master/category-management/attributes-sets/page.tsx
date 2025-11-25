"use client";

import React, { useState } from "react";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";

const attributeSetsData = [
  {
    id: 1,
    name: "Clothing Attributes",
    attributes: ["Color", "Size", "Material", "Fit"],
    status: "active",
  },
  {
    id: 2,
    name: "Mobile Specs",
    attributes: ["Storage", "RAM", "Color", "Battery"],
    status: "active",
  },
  {
    id: 3,
    name: "Furniture Specs",
    attributes: ["Material", "Dimensions", "Weight"],
    status: "inactive",
  },
  {
    id: 4,
    name: "Shoe Attributes",
    attributes: ["Size", "Color", "Sole Type"],
    status: "active",
  },
];

const Page = () => {
  const [search, setSearch] = useState("");

  const filtered = attributeSetsData.filter((set) =>
    set.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">Attribute Sets</h4>

        <button className="btn btn-primary d-flex align-items-center gap-2">
          <Plus size={18} />
          Add Attribute Set
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
            placeholder="Search attribute sets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Set Name</th>
                <th>Attributes</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((set) => (
                <tr key={set.id}>
                  {/* NAME */}
                  <td className="fw-semibold">{set.name}</td>

                  {/* ATTRIBUTES */}
                  <td>
                    {set.attributes.map((attr, idx) => (
                      <span
                        key={idx}
                        className="badge bg-secondary me-1 mb-1"
                      >
                        {attr}
                      </span>
                    ))}
                  </td>

                  {/* STATUS */}
                  <td>
                    <span
                      className={`badge px-3 ${
                        set.status === "active" ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {set.status}
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

              {/* NO RESULTS */}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-muted">
                    No attribute sets found.
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
