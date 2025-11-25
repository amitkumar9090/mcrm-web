"use client";

import React from "react";
import { FaFileCsv, FaUpload } from "react-icons/fa";

const page = () => {
  return (
    <div className="content">
      <h4 className="mb-4">Bulk Stock Import</h4>

      <div className="card border-0 rounded-0 shadow-sm">
        <div className="card-body">

          <h5 className="mb-3">Upload CSV File</h5>

          <p className="text-muted">
            Import stock updates in bulk using a CSV file. Make sure your file
            follows the required column structure.
          </p>

          {/* Sample CSV Download */}
          <a href="#" className="btn btn-success mb-3">
            <FaFileCsv className="me-2" />
            Download Sample CSV
          </a>

          <div className="mb-3">
            <label className="form-label fw-bold">Choose CSV File</label>
            <input type="file" className="form-control" accept=".csv" />
          </div>

          <button className="btn btn-primary px-4">
            <FaUpload className="me-2" />
            Upload
          </button>

          <hr className="my-4" />

          <h6 className="fw-bold">CSV Format Instructions</h6>
          <ul className="text-muted small">
            <li>Required columns: <b>product_id, sku, stock, warehouse_id</b></li>
            <li>File must be in <b>.csv</b> format only.</li>
            <li>Make sure product ID & SKU match database values.</li>
            <li>Large files may take a few minutes to process.</li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default page;
