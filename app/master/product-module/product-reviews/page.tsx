"use client";

import React from "react";

// Review Interface
interface ProductReview {
  id: number;
  productName: string;
  userName: string;
  rating: number; // 1–5 stars
  comment: string;
  created_at: string;
}

// Dummy Reviews
const reviews: ProductReview[] = [
  {
    id: 1,
    productName: "Apple MacBook Pro 14”",
    userName: "John Doe",
    rating: 5,
    comment: "Excellent performance, worth every penny!",
    created_at: "2024-11-20T10:00:00Z",
  },
  {
    id: 2,
    productName: "Samsung Galaxy S24 Ultra",
    userName: "Aarav Sharma",
    rating: 4,
    comment: "Amazing camera, battery could be better.",
    created_at: "2024-11-19T11:30:00Z",
  },
  {
    id: 3,
    productName: "Nike Air Zoom Pegasus",
    userName: "Maria Lopez",
    rating: 3,
    comment: "Comfortable but sizing feels off.",
    created_at: "2024-11-15T09:45:00Z",
  },
];

// -----------------------------------
// PRODUCT REVIEWS PAGE
// -----------------------------------

const page = () => {
  return (
    <div className="content">
      <h4 className="mb-4">Product Reviews</h4>

      <div className="card border-0 rounded-0">
        <div className="card-body">

          <h6 className="mb-3">
            Total Reviews:{" "}
            <span className="badge bg-primary">{reviews.length}</span>
          </h6>

          {reviews.length === 0 ? (
            <p className="text-muted">No reviews available.</p>
          ) : (
            <ul className="list-group">
              {reviews.map((review) => (
                <li
                  key={review.id}
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div>
                    <strong>{review.productName}</strong>
                    <br />
                    <small className="text-muted">
                      By {review.userName} •{" "}
                      {new Date(review.created_at).toLocaleDateString()}
                    </small>
                    <p className="mb-1 mt-2">{review.comment}</p>
                  </div>

                  {/* Rating Badge */}
                  <span className="badge bg-warning text-dark fs-15">
                    ⭐ {review.rating}
                  </span>
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </div>
  );
};

export default page;
