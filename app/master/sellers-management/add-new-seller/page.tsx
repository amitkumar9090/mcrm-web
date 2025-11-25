"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getRoles,
  addUsers,
} from "../../../services/manageUsersApi";
import { isAuthenticated } from "../../../utils/auth";

export default function AddUserPage() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form state
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role_id: "",
    image: null,
  });
  const [formLoading, setFormLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const data = new FormData();
    data.append("fname", formData.fname);
    data.append("lname", formData.lname);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("password", formData.password);
    data.append("role_id", formData.role_id);

    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      setFormLoading(true);
      await addUsers(data, token);
      alert("User created successfully!");
      
      // Redirect to manage users page
      router.push("/master/user-management/manage-users");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to create user!");
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
          <h4 className="mb-1">Add New Seller</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="/dashboard">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/manage-sellers">Manage Sellers</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Add Seller
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Card */}
      <div className="card border-0">
        <div className="card-header">
          <h5 className="mb-0">Seller Information</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Image Upload */}
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
                      Upload file
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

              {/* First Name */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Phone <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Password <span className="text-danger">*</span>
                  </label>
                  <div className="input-group input-group-flat pass-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control pass-input"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <span
                      className="input-group-text toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                    >
                      <i
                        className={
                          showPassword ? "ti ti-eye" : "ti ti-eye-off"
                        }
                      />
                    </span>
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Repeat Password <span className="text-danger">*</span>
                  </label>
                  <div className="input-group input-group-flat pass-group">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-control pass-input"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <span
                      className="input-group-text toggle-password"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <i
                        className={
                          showConfirmPassword ? "ti ti-eye" : "ti ti-eye-off"
                        }
                      />
                    </span>
                  </div>
                </div>
              </div>

              {/* Role */}
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Role <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    name="role_id"
                    value={formData.role_id}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Role</option>
                    {roles.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
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
                {formLoading ? "Creating..." : "Create Seller"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}