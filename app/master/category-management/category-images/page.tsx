"use client";

import React, { useState } from "react";
import { Upload, Image as ImageIcon, Trash2 } from "lucide-react";

const Page = () => {
  const [images, setImages] = useState<string[]>([]);

  // Handle Image Upload
  const handleUpload = (event: any) => {
    const files = event.target.files;
    if (!files) return;

    const uploadedImages = [...images];

    for (let file of files) {
      const url = URL.createObjectURL(file);
      uploadedImages.push(url);
    }

    setImages(uploadedImages);
  };

  return (
    <div className="container py-4">
      {/* Page Title */}
      <h4 className="fw-bold mb-4">Category Images</h4>

      {/* Upload Card */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">

          <label className="form-label fw-semibold">Upload Category Images</label>

          <div className="input-group">
            <span className="input-group-text bg-light">
              <Upload size={18} />
            </span>

            <input
              type="file"
              className="form-control"
              accept="image/*"
              multiple
              onChange={handleUpload}
            />
          </div>

          <small className="text-muted mt-2 d-block">
            Supported formats: JPG, PNG, WEBP
          </small>
        </div>
      </div>

      {/* Image Preview Grid */}
      <div className="row g-4">
        {images.length === 0 && (
          <div className="col-12 text-center text-muted mt-3">
            <ImageIcon size={40} className="mb-2" />
            <p>No images uploaded yet.</p>
          </div>
        )}

        {images.map((img, index) => (
          <div className="col-6 col-md-4 col-lg-3" key={index}>
            <div className="card shadow-sm border-0 position-relative">

              {/* Image */}
              <img
                src={img}
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
              />

              <div className="card-body p-2">

                {/* Sorting Order */}
                <input
                  type="number"
                  className="form-control form-control-sm mb-2"
                  placeholder="Order"
                  min={1}
                />

                {/* Delete Button */}
                <button
                  className="btn btn-sm btn-outline-danger w-100"
                  onClick={() =>
                    setImages(images.filter((_, i) => i !== index))
                  }
                >
                  <Trash2 size={16} /> Remove
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
