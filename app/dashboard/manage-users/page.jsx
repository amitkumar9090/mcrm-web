"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getUsers,
  getRoles,
  addUsers,
  getUserById,
  deleteUser,
} from "../../services/manageUsersApi";
import { isAuthenticated } from "../../utils/auth";


export default function ManageUsers() {

  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState("");
const [userDetails, setUserDetails] = useState({});


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
   const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuthAndFetchUsers = async () => {
      if (!isAuthenticated()) {
        router.replace("/login");
        return;
      }

      const savedToken = localStorage.getItem("token");
      console.log("Saved token:", savedToken);

      if (!savedToken) {
        console.error("No token found in localStorage!");
        router.replace("/login");
        return;
      }

      setToken(savedToken);

      try {
        const data = await getUsers(savedToken);
        const dataRoles = await getRoles(savedToken);
        console.log("Fetched users:", data);
        console.log("dataRoles", dataRoles);

        setUsers(data);
        setRoles(dataRoles);
      } catch (err) {
        console.error("Failed to load users:", err);

        if (err.status === 401) {
          localStorage.removeItem("token");
          router.replace("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    checkAuthAndFetchUsers();
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

      // Use API service function instead of direct axios call
      const response = await addUsers(data, token);

      alert("User created successfully!");

      // Reset form
      setFormData({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        role_id: "",
        image: null,
      });
      setImagePreview(null);

      // Refresh users list
      const updatedUsers = await getUsers(token);
      setUsers(updatedUsers);

      // Close offcanvas
      const offcanvasElement = document.getElementById("offcanvas_add");
      const offcanvasInstance =
        window.bootstrap?.Offcanvas?.getInstance(offcanvasElement);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to create user!");
    } finally {
      setFormLoading(false);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return (
      date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }) +
      ", " +
      date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    );
  };

  // Format time ago
  const formatTimeAgo = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600)
      return `${Math.floor(diffInSeconds / 60)} mins ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800)
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    return formatDate(dateString);
  };

  // Get user initials
  const getInitials = (name) => {
    if (!name) return "U";
    const nameParts = name.split(" ");
    if (nameParts.length >= 2) {
      return nameParts[0].charAt(0) + nameParts[1].charAt(0);
    }
    return name.charAt(0);
  };
  // Add state to store the user ID to delete
  const [userToDelete, setUserToDelete] = useState(null);

  // Open modal instead of confirm
  const handleDelete = (userId) => {
    setUserToDelete(userId);
    // Open the modal using Bootstrap's modal API
    const modal = new bootstrap.Modal(
      document.getElementById("delete_contact")
    );
    modal.show();
  };



  // // Option 1: Fetch user on component mount
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     setLoading(true);
  //     try {
  //       const userData = await getUserById('user-id-here', token);
  //       setUser(userData);
  //       setError(null);
  //     } catch (err) {
  //       setError(err.message);
  //       console.error('Error:', err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUser();
  // }, []); // Empty dependency array means run once on mount


const handleFetchUser = async (userId) => {
    setLoading(true);
    try {
      const userData = await getUserById(userId, token);
      console.log(userData);
      setUserDetails(userData.data);
      console.log("Fetched user singel data :", userData);
      setError(null);
    } catch (err) {
      setError(err.message);
      
      // Handle different error types
      if (err.type === 'network_error') {
        alert('Network error! Please check your connection.');
      } else if (err.status === 404) {
        alert('User not found!');
      } else {
        alert(`Error: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  // Actual delete function
  const confirmDelete = async () => {
    if (!userToDelete) return;

    try {
      await deleteUser(userToDelete, token);
      alert("User deleted successfully!");
      setUsers(users.filter((u) => u.id !== userToDelete));
      setUserToDelete(null); // Clear the stored ID
    } catch (error) {
      console.error("Failed to delete user:", error);
      alert("Error deleting user!");
    }
  };
  return (
    <>
      <div className="content pb-0">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1">
              Manage Users
              <span className="badge badge-soft-primary ms-2">{users.length}</span>
            </h4>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Manage Users
                </li>
              </ol>
            </nav>
          </div>
          <div className="gap-2 d-flex align-items-center flex-wrap">
            <div className="dropdown">
              <a
                href="javascript:void(0);"
                className="dropdown-toggle btn btn-outline-light px-2 shadow"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-package-export me-2" />
                Export
              </a>
              <div className="dropdown-menu  dropdown-menu-end">
                <ul>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="ti ti-file-type-pdf me-1" />
                      Export as PDF
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="ti ti-file-type-xls me-1" />
                      Export as Excel{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="javascript:void(0);"
              className="btn btn-icon btn-outline-light shadow"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Refresh"
              data-bs-original-title="Refresh"
            >
              <i className="ti ti-refresh" />
            </a>
            <a
              href="javascript:void(0);"
              className="btn btn-icon btn-outline-light shadow"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Collapse"
              data-bs-original-title="Collapse"
              id="collapse-header"
            >
              <i className="ti ti-transition-top" />
            </a>
          </div>
        </div>
        {/* End Page Header */}
        {/* card start */}
        <div className="card border-0 rounded-0">
          {/* Card Header */}
          <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
            <div className="input-icon input-icon-start position-relative">
              <span className="input-icon-addon text-dark"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
            <a
              href="javascript:void(0);"
              className="btn btn-primary"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas_add"
            >
              <i className="ti ti-square-rounded-plus-filled me-1" />
              Add User
            </a>
          </div>

          {/* Card Body */}
          <div className="card-body">
            {/* Table Header Controls */}

            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <div className="dropdown">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-outline-light shadow px-2"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    <i className="ti ti-filter me-2" />
                    Filter
                    <i className="ti ti-chevron-down ms-2" />
                  </a>
                  <div className="filter-dropdown-menu dropdown-menu dropdown-menu-lg p-0">
                    <div className="filter-header d-flex align-items-center justify-content-between border-bottom">
                      <h6 className="mb-0">
                        <i className="ti ti-filter me-1" />
                        Filter
                      </h6>
                      <button
                        type="button"
                        className="btn-close close-filter-btn"
                        data-bs-dismiss="dropdown-menu"
                        aria-label="Close"
                      />
                    </div>
                    <div className="filter-set-view p-3">
                      <div className="accordion" id="accordionExample">
                        <div className="filter-set-content">
                          <div className="filter-set-content-head">
                            <a
                              href="#"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="true"
                              aria-controls="collapseTwo"
                            >
                              Name
                            </a>
                          </div>
                          <div
                            className="filter-set-contents accordion-collapse collapse show"
                            id="collapseTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                              <div className="mb-2">
                                <div className="input-icon-start input-icon position-relative">
                                  <span className="input-icon-addon fs-12"></span>
                                  <input
                                    type="text"
                                    className="form-control form-control-md"
                                    placeholder="Search"
                                  />
                                </div>
                              </div>
                              <ul className="mb-0">
                                <li className="mb-1">
                                  <label className="dropdown-item px-2 d-flex align-items-center">
                                    <input
                                      className="form-check-input m-0 me-1"
                                      type="checkbox"
                                    />
                                    <span className="avatar avatar-xs rounded-circle me-2">
                                      <img
                                        src="/assets/img/users/user-06.jpg"
                                        className="flex-shrink-0 rounded-circle"
                                        alt="img"
                                      />
                                    </span>
                                    Elizabeth Morgan
                                  </label>
                                </li>
                                <li className="mb-1">
                                  <label className="dropdown-item px-2 d-flex align-items-center">
                                    <input
                                      className="form-check-input m-0 me-1"
                                      type="checkbox"
                                    />
                                    <span className="avatar avatar-xs rounded-circle me-2">
                                      <img
                                        src="/assets/img/users/user-40.jpg"
                                        className="flex-shrink-0 rounded-circle"
                                        alt="img"
                                      />
                                    </span>
                                    Katherine Brooks
                                  </label>
                                </li>

                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    className="link-primary text-decoration-underline p-2 d-flex"
                                  >
                                    Load More
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="filter-set-content">
                          <div className="filter-set-content-head">
                            <a
                              href="#"
                              className="collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Phone
                            </a>
                          </div>
                          <div
                            className="filter-set-contents accordion-collapse collapse"
                            id="collapseThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                              <ul>
                                <li>
                                  <label className="dropdown-item px-2 d-flex align-items-center">
                                    <input
                                      className="form-check-input m-0 me-1"
                                      type="checkbox"
                                    />
                                    +1 87545 54503
                                  </label>
                                </li>
                                <li>
                                  <label className="dropdown-item px-2 d-flex align-items-center">
                                    <input
                                      className="form-check-input m-0 me-1"
                                      type="checkbox"
                                    />
                                    +1 98975 17485
                                  </label>
                                </li>
                                <li>
                                  <label className="dropdown-item px-2 d-flex align-items-center">
                                    <input
                                      className="form-check-input m-0 me-1"
                                      type="checkbox"
                                    />
                                    +1 54655 25455
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="filter-set-content">
                          <div className="filter-set-content-head">
                            <a
                              href="#"
                              className="collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#owner"
                              aria-expanded="false"
                              aria-controls="owner"
                            >
                              Email
                            </a>
                          </div>
                          <div
                            className="filter-set-contents accordion-collapse collapse"
                            id="owner"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                              <ul className="mb-0">
                                <li className="mb-1">
                                  <label className="dropdown-item px-2 d-flex align-items-center">
                                    <input
                                      className="form-check-input m-0 me-1"
                                      type="checkbox"
                                    />
                                    elizabeth@example.com
                                  </label>
                                </li>
                                <li className="mb-1">
                                  <label className="dropdown-item px-2 d-flex align-items-center">
                                    <input
                                      className="form-check-input m-0 me-1"
                                      type="checkbox"
                                    />
                                    katherine@example.com
                                  </label>
                                </li>
                                <li className="mb-1">
                                  <label className="dropdown-item px-2 d-flex align-items-center">
                                    <input
                                      className="form-check-input m-0 me-1"
                                      type="checkbox"
                                    />
                                    samantha@example.com
                                  </label>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    className="link-primary text-decoration-underline p-2 pt-0 d-flex"
                                  >
                                    Load More
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="filter-set-content">
                          <div className="filter-set-content-head">
                            <a
                              href="#"
                              className="collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#Status"
                              aria-expanded="false"
                              aria-controls="Status"
                            >
                              Status
                            </a>
                          </div>
                          <div
                            className="filter-set-contents accordion-collapse collapse"
                            id="Status"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                              <ul>
                                <li>
                                  <label className="dropdown-item px-2 d-flex align-items-center">
                                    <input
                                      className="form-check-input m-0 me-1"
                                      type="checkbox"
                                    />
                                    Active
                                  </label>
                                </li>
                                <li>
                                  <label className="dropdown-item px-2 d-flex align-items-center">
                                    <input
                                      className="form-check-input m-0 me-1"
                                      type="checkbox"
                                    />
                                    Inactive
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-outline-light w-100"
                        >
                          Reset
                        </a>
                        <a
                          href="manage-users.html"
                          className="btn btn-primary w-100"
                        >
                          Filter
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="reportrange"
                  className="reportrange-picker d-flex align-items-center shadow"
                >
                  <i className="ti ti-calendar-due text-dark fs-14 me-1" />
                  <span className="reportrange-picker-field">
                    9 Jun 25 - 9 Jun 25
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <div className="dropdown">
                  <a
                    href="javascript:void(0);"
                    className="dropdown-toggle btn btn-outline-light px-2 shadow"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-sort-ascending-2 me-2" />
                    Sort By
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a href="javascript:void(0);" className="dropdown-item">
                          Newest
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" className="dropdown-item">
                          Oldest
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="dropdown">
                  <a
                    href="javascript:void(0);"
                    className="btn bg-soft-indigo px-2 border-0"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    <i className="ti ti-columns-3 me-2" />
                    Manage Columns
                  </a>
                  <div className="dropdown-menu dropdown-menu-md dropdown-md p-3">
                    <ul>
                      <li className="gap-1 d-flex align-items-center mb-2">
                        <i className="ti ti-columns me-1" />
                        <div className="form-check form-switch w-100 ps-0">
                          <label className="form-check-label d-flex align-items-center gap-2 w-100">
                            <span>Name</span>
                            <input
                              className="form-check-input switchCheckDefault ms-auto"
                              type="checkbox"
                              role="switch"
                              defaultChecked=""
                            />
                          </label>
                        </div>
                      </li>
                      <li className="gap-1 d-flex align-items-center mb-2">
                        <i className="ti ti-columns me-1" />
                        <div className="form-check form-switch w-100 ps-0">
                          <label className="form-check-label d-flex align-items-center gap-2 w-100">
                            <span>Phone</span>
                            <input
                              className="form-check-input switchCheckDefault ms-auto"
                              type="checkbox"
                              role="switch"
                              defaultChecked=""
                            />
                          </label>
                        </div>
                      </li>
                      <li className="gap-1 d-flex align-items-center mb-2">
                        <i className="ti ti-columns me-1" />
                        <div className="form-check form-switch w-100 ps-0">
                          <label className="form-check-label d-flex align-items-center gap-2 w-100">
                            <span>Email</span>
                            <input
                              className="form-check-input switchCheckDefault ms-auto"
                              type="checkbox"
                              role="switch"
                              defaultChecked=""
                            />
                          </label>
                        </div>
                      </li>
                      <li className="gap-1 d-flex align-items-center mb-2">
                        <i className="ti ti-columns me-1" />
                        <div className="form-check form-switch w-100 ps-0">
                          <label className="form-check-label d-flex align-items-center gap-2 w-100">
                            <span>Created </span>
                            <input
                              className="form-check-input switchCheckDefault ms-auto"
                              type="checkbox"
                              role="switch"
                              defaultChecked=""
                            />
                          </label>
                        </div>
                      </li>
                      <li className="gap-1 d-flex align-items-center mb-2">
                        <i className="ti ti-columns me-1" />
                        <div className="form-check form-switch w-100 ps-0">
                          <label className="form-check-label d-flex align-items-center gap-2 w-100">
                            <span>Last Activity</span>
                            <input
                              className="form-check-input switchCheckDefault ms-auto"
                              type="checkbox"
                              role="switch"
                              defaultChecked=""
                            />
                          </label>
                        </div>
                      </li>
                      <li className="gap-1 d-flex align-items-center mb-2">
                        <i className="ti ti-columns me-1" />
                        <div className="form-check form-switch w-100 ps-0">
                          <label className="form-check-label d-flex align-items-center gap-2 w-100">
                            <span>Status</span>
                            <input
                              className="form-check-input switchCheckDefault ms-auto"
                              type="checkbox"
                              role="switch"
                              defaultChecked=""
                            />
                          </label>
                        </div>
                      </li>
                      <li className="gap-1 d-flex align-items-center">
                        <i className="ti ti-columns me-1" />
                        <div className="form-check form-switch w-100 ps-0">
                          <label className="form-check-label d-flex align-items-center gap-2 w-100">
                            <span>Action</span>
                            <input
                              className="form-check-input switchCheckDefault ms-auto"
                              type="checkbox"
                              role="switch"
                              defaultChecked=""
                            />
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading users...</p>
              </div>
            )}

            {/* Table */}
            {!loading && (
              <>
                <div className="table-responsive custom-table">
                  <table className="table table-nowrap" id="manage-users-list">
                    <thead className="table-light">
                      <tr>
                        <th className="no-sort">
                          <div className="form-check form-check-md">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="select-all"
                            />
                          </div>
                        </th>
                        {/* <th className="no-sort" /> */}
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created</th>
                        <th>Last Activity</th>
                        <th>Status</th>
                        <th className="text-end no-sort">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.length === 0 ? (
                        <tr>
                          <td colSpan="8" className="text-center py-4">
                            <div className="text-muted">
                              <i className="ti ti-users-off fs-3 d-block mb-2" />
                              No users found
                            </div>
                          </td>
                        </tr>
                      ) : (
                        users.map((user, index) => (
                          <tr key={user.id || index}>
                            {/* Checkbox */}
                            <td>
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                />
                              </div>
                            </td>

                            {/* Star/Favorite */}
                            {/* <td>
                              <div className="set-star rating-select">
                                <i className="ti ti-star fs-16" />
                              </div>
                            </td> */}

                            {/* Name with Avatar */}
                            <td>
                              <h6 className="d-flex align-items-center fs-14 fw-medium mb-0">
                                <span className="avatar avatar-rounded me-2">
                                  {user.avatar ? (
                                    <img
                                      src={user.avatar}
                                      alt={user.name}
                                      className="rounded-circle"
                                    />
                                  ) : (
                                    <span className="avatar-title bg-primary text-white rounded-circle">
                                      {getInitials(user.name)}
                                    </span>
                                  )}
                                </span>
                                <a
                                  href="javascript:void(0);"
                                  className="d-flex flex-column"
                                >
                                  {user.name || "N/A"}
                                  <span className="text-body fs-13 mt-1 d-inline-block fw-normal">
                                    {(user.roles.length > 0 ? user.roles[0].name : '') || "User"}
                                  </span>
                                </a>
                              </h6>
                            </td>

                            {/* Email */}
                            <td>{user.email || "N/A"}</td>

                            {/* Created Date */}
                            <td>{formatDate(user.created_at)}</td>

                            {/* Last Activity */}
                            <td>
                              {formatTimeAgo(
                                user.updated_at || user.created_at
                              )}
                            </td>

                            {/* Status */}
                            <td>
                              <span
                                className={`badge badge-pill badge-status ${
                                  user.status === "active" ||
                                  user.status === 1 ||
                                  !user.status
                                    ? "bg-success"
                                    : "bg-danger"
                                }`}
                              >
                                {user.status === "active" ||
                                user.status === 1 ||
                                !user.status
                                  ? "Active"
                                  : "Inactive"}
                              </span>
                            </td>

                            {/* Action Dropdown */}
                            <td className="text-end">
                              <div className="dropdown table-action">
                                <a
                                  href="javascript:void(0);"
                                  className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvas_edit"
                                    onClick={() => handleFetchUser(user.id)}
                                  >
                                    <i className="ti ti-edit text-blue" /> Edit
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="dropdown-item"
                                    onClick={() => handleDelete(user.id)}
                                  >
                                    <i className="ti ti-trash text-danger" />{" "}
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {users.length > 0 && (
                  <div className="row align-items-center mt-3">
                    <div className="col-md-6">
                      <div className="datatable-length">
                        Showing {users.length}{" "}
                        {users.length === 1 ? "entry" : "entries"}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="datatable-paginate">
                        {/* Add pagination controls here if needed */}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        {/* card end */}
      </div>
      {/* Add User */}
      <div
        className="offcanvas offcanvas-end offcanvas-large"
        tabIndex={-1}
        id="offcanvas_add"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="fw-semibold">Add New User</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="offcanvas-body">
          <form onSubmit={handleSubmit}>
            <div>
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
                    <label className="form-label">Password</label>
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
            </div>

            <div className="d-flex align-items-center justify-content-end">
              <button
                type="button"
                className="btn btn-light me-2"
                data-bs-dismiss="offcanvas"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={formLoading}
              >
                {formLoading ? "Creating..." : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* /Add User */}
      {/* Edit User */}
      <div
        className="offcanvas offcanvas-end offcanvas-large"
        tabIndex={-1}
        id="offcanvas_edit"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="fw-semibold">Edit User</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="offcanvas-body">
          <form action="manage-users.html">
            <div>
              {/* Basic Info */}
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
                    <label className="form-label">Password</label>
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
              {/* /Basic Info */}
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <a
                href="#"
                className="btn btn-light me-2"
                data-bs-dismiss="offcanvas"
              >
                Cancel
              </a>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* /Edit User */}
      {/* delete modal */}
  
      <div className="modal fade" id="delete_contact">
        <div className="modal-dialog modal-dialog-centered modal-sm rounded-0">
          <div className="modal-content rounded-0">
            <div className="modal-body p-4 text-center position-relative">
              <div className="mb-3 position-relative z-1">
                <span className="avatar avatar-xl badge-soft-danger border-0 text-danger rounded-circle">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="mb-1">Delete Confirmation</h5>
              <p className="mb-3">
                Are you sure you want to remove user you selected.
              </p>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-light position-relative z-1 me-2 w-100"
                  data-bs-dismiss="modal"
                  onClick={() => setUserToDelete(null)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary position-relative z-1 w-100"
                  data-bs-dismiss="modal"
                  onClick={confirmDelete}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* delete modal */}
    </>
  );
}
