"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getRoles, // Kept this function, assuming it might be used elsewhere or for context, but the role field is removed from the form.
  addUsers, // Kept this function, but the payload will change to business data. Consider renaming the function/API call.
} from "../../../services/manageUsersApi";
import { isAuthenticated } from "../../../utils/auth";

export default function AddUserPage() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [roles, setRoles] = useState([]); // Kept for potential future use or if API depends on it
  const [loading, setLoading] = useState(true);

  // Form state updated to include Business Details fields
  const [formData, setFormData] = useState({
    store_business_name: "", // Store/Business Name
    business_type: "",       // Business Type
    business_legal_name: "", // Business Legal Name
    company_registration_number: "", // Company Registration Number (CIN/LLP number)
    registered_business_address: "", // Registered Business Address
    pickup_warehouse_address: "", // Pickup/Warehouse Address
    date_of_incorporation: "", // Date of Incorporation/Registration
    image: null, // Keeping image upload for the business logo/seller profile
  });
  const [formLoading, setFormLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const checkAuthAndFetchRoles = async () => {
      if (!isAuthenticated()) {
        router.replace("/login");
        return;
      }

      const savedToken = localStorage.getItem("token");
      if (!savedToken) {
        router.replace("/login");
        return;
      }

      setToken(savedToken);

      try {
        // Keeping role fetching, though the form no longer uses it directly
        const dataRoles = await getRoles(savedToken);
        setRoles(dataRoles);
      } catch (err) {
        console.error("Failed to load roles:", err);
        if (err.status === 401) {
          localStorage.removeItem("token");
          router.replace("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    checkAuthAndFetchRoles();
  }, [router]);

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("store_business_name", formData.store_business_name);
    data.append("business_type", formData.business_type);
    data.append("business_legal_name", formData.business_legal_name);
    data.append("company_registration_number", formData.company_registration_number);
    data.append("registered_business_address", formData.registered_business_address);
    data.append("pickup_warehouse_address", formData.pickup_warehouse_address);
    data.append("date_of_incorporation", formData.date_of_incorporation);

    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      setFormLoading(true);
      // NOTE: The 'addUsers' API call is likely incorrect for adding business details. 
      // You should replace this with a dedicated API call, e.g., 'registerSeller' or 'addBusinessDetails'.
      await addUsers(data, token); 
      alert("Seller/Business details created successfully!");
      
      // Redirect to manage users page
      router.push("/master/user-management/manage-users");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to create seller/business details!");
    } finally {
      setFormLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="content pb-0">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content pb-0">
      {/* Page Header */}
      <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
        <div>
          <h4 className="mb-1">Add New Store</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="/dashboard">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/manage-stores">Manage Stores</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Add Store
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Card */}
      <div className="card border-0">
        <div className="card-header">
          <h5 className="mb-0">Business Details</h5> {/* Updated Title */}
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Image Upload (Kept for Business Logo/Profile) */}
              <div className="col-md-12">
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar avatar-xxl border border-dashed me-3 flex-shrink-0">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="preview"
                          className="rounded-circle"
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <i className="ti ti-photo text-dark fs-16" />
                      )}
                    </div>
                  </div>
                  <div className="d-inline-flex flex-column align-items-start">
                    <label className="btn btn-sm btn-primary position-relative mb-2">
                      <i className="ti ti-file-broken me-1" />
                      Upload Logo/Image
                      <input
                        type="file"
                        className="form-control image-sign"
                        onChange={handleFileChange}
                        accept="image/*"
                        style={{ display: "none" }}
                      />
                    </label>
                    <span>JPG, GIF or PNG. Max size of 800K</span>
                  </div>
                </div>
              </div>

              {/* 1. Store/Business Name */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Store/Business Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="store_business_name"
                    value={formData.store_business_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* 2. Business Type (Using select for defined options) */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Business Type <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    name="business_type"
                    value={formData.business_type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Business Type</option>
                    <option value="Sole Proprietorship">Sole Proprietorship</option>
                    <option value="Private Limited Company">Private Limited Company</option>
                    <option value="LLP">LLP</option>
                    <option value="Partnership Firm">Partnership Firm</option>
                    <option value="Individual">Individual</option>
                    {/* Add more types as needed */}
                  </select>
                </div>
              </div>

              {/* 3. Business Legal Name */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Business Legal Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="business_legal_name"
                    value={formData.business_legal_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* 4. Company Registration Number (CIN/LLP number) */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Company Registration Number (CIN/LLP)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="company_registration_number"
                    value={formData.company_registration_number}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* 5. Registered Business Address */}
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Registered Business Address <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    name="registered_business_address"
                    rows="3"
                    value={formData.registered_business_address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* 6. Pickup/Warehouse Address */}
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Pickup/Warehouse Address <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    name="pickup_warehouse_address"
                    rows="3"
                    value={formData.pickup_warehouse_address}
                    onChange={handleChange}
                    required
                  />
                  <small className="form-text text-muted">
                    Location from where orders will be shipped. Often needs to be within the same state as the tax registration.
                  </small>
                </div>
              </div>

              {/* 7. Date of Incorporation/Registration */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Date of Incorporation/Registration
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="date_of_incorporation"
                    value={formData.date_of_incorporation}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              {/* Removed: fname, lname, email, phone, password, confirmPassword, and role fields */}
            </div>

            <div className="d-flex align-items-center justify-content-end gap-2 mt-4">
              <button
                type="button"
                className="btn btn-light"
                onClick={() => router.push("/manage-users")}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={formLoading}
              >
                {formLoading ? "Saving..." : "Save Business Details"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}