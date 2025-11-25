"use client";

import React from "react";
import { Search, FileText, Globe, Tag, Hash } from "lucide-react";

const Page = () => {
  return (
    <div className="container py-4">

      {/* Page Title */}
      <h4 className="fw-bold mb-4">Category SEO</h4>

      {/* SEO Form Card */}
      <div className="card shadow-sm border-0">
        <div className="card-body">

          {/* Row 1 : Meta Title */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Meta Title
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <FileText size={18} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter meta title"
              />
            </div>
          </div>

          {/* Row 2 : Meta Description */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Meta Description
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <Search size={18} />
              </span>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Enter meta description"
              ></textarea>
            </div>
          </div>

          {/* Row 3 : Meta Keywords */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Meta Keywords
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <Tag size={18} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter keywords (comma separated)"
              />
            </div>
          </div>

          {/* Row 4 : Slug */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Category Slug (URL)
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <Globe size={18} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="example-category-name"
              />
            </div>
          </div>

          {/* Row 5 : Canonical URL */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Canonical URL
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <Hash size={18} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="https://yourwebsite.com/category"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary px-4 fw-semibold">
            Save SEO Settings
          </button>

        </div>
      </div>
    </div>
  );
};

export default Page;
