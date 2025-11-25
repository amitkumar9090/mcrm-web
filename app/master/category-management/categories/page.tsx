"use client";

import React, { useState } from "react";
import { Grid2X2, Tags, Boxes, Trophy, ShoppingBag, Plus, Search } from "lucide-react";

const initialCategories = [
  { title: "Electronics", count: 128, icon: Grid2X2 },
  { title: "Fashion", count: 89, icon: ShoppingBag },
  { title: "Home & Kitchen", count: 54, icon: Boxes },
  { title: "Sports", count: 32, icon: Trophy },
  { title: "Accessories", count: 101, icon: Tags },
];

// Define an array of light background colors
const cardColors = [
  "#9AE79D", // Light Green
  "#A5EEFF", // Light Blue
  "#F7F292", // Light Yellow
  "#FFB6C1", // Light Pink
  "#D8BFD8", // Thistle (Light Purple)
];

const Page = () => {
  const [search, setSearch] = useState("");

  const filtered = initialCategories.filter((cat) =>
    cat.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">

      {/* PAGE HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className=" mb-0">Categories</h4>

        <button className="btn btn-primary d-flex align-items-center gap-2">
          <Plus size={18} />
          Add Category
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
            placeholder="Search categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* CATEGORIES GRID */}
      <div className="row g-4">
        {filtered.map((cat, index) => {
          const Icon = cat.icon;
          
          // Determine the background color by using the modulo operator (%)
          // This cycles through the cardColors array: 0, 1, 2, 3, 4, 0, 1, 2, ...
          const bgColor = cardColors[index % cardColors.length]; 
          
          return (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <div 
                className="card border-0 shadow-sm h-100" 
                style={{ backgroundColor: bgColor }} // Apply the background color here
              >
                <div className="card-body">

                  {/* Header */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0 fw-medium text-dark">{cat.title}</h5>

                    <div
                      className="rounded-circle bg-white d-flex align-items-center justify-content-center" // Changed to bg-white for contrast
                      style={{
                        width: "50px",
                        height: "50px"
                      }}
                    >
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="badge bg-dark px-3 py-2"> {/* Changed to bg-dark for contrast */}
                    {cat.count} items
                  </span>

                </div>
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="text-center py-5">
            <h5 className="text-muted">No categories found</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;