"use client";

import React, { useState } from "react";
import { ArrowUp, ArrowDown, Grid2X2 } from "lucide-react";

const Page = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics" },
    { id: 2, name: "Fashion" },
    { id: 3, name: "Home & Kitchen" },
    { id: 4, name: "Sports" },
    { id: 5, name: "Accessories" },
  ]);

  // Move item up or down
  const moveItem = (index: number, direction: "up" | "down") => {
    const updated = [...categories];

    if (direction === "up" && index > 0) {
      [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
    }

    if (direction === "down" && index < updated.length - 1) {
      [updated[index + 1], updated[index]] = [updated[index], updated[index + 1]];
    }

    setCategories(updated);
  };

  return (
    <div className="container py-4">
      {/* Page Title */}
      <h1 className="fw-bold mb-4">Category Sorting</h1>

      <div className="card shadow-sm border-0">
        <div className="card-body">

          {/* Table */}
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>

            <tbody>
              {categories.map((cat, index) => (
                <tr key={cat.id}>
                  <td className="fw-semibold">{index + 1}</td>

                  <td>
                    <Grid2X2 size={16} className="me-2 text-secondary" />
                    {cat.name}
                  </td>

                  <td className="text-end">
                    <div className="btn-group">

                      {/* Move Up */}
                      <button
                        className="btn btn-sm btn-outline-primary"
                        disabled={index === 0}
                        onClick={() => moveItem(index, "up")}
                      >
                        <ArrowUp size={16} />
                      </button>

                      {/* Move Down */}
                      <button
                        className="btn btn-sm btn-outline-primary"
                        disabled={index === categories.length - 1}
                        onClick={() => moveItem(index, "down")}
                      >
                        <ArrowDown size={16} />
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>
    </div>
  );
};

export default Page;
