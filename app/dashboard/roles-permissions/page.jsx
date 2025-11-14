"use client";

import React, { useState, useMemo, useEffect } from "react";
import "./roles-permissions.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getRoles, createRole } from "../../services/roles&PermissionsApi";
import { isAuthenticated } from "../../utils/auth";

export default function RolesPermissions() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });
  const [roles, setRoles] = useState([]);
  const [token, setToken] = useState(""); // Added missing state
  const [loading, setLoading] = useState(true); // Added missing state
  const [data, setData] = useState([]); // Changed from initialData to empty array
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newRoleName, setNewRoleName] = useState("");
  const [editingRole, setEditingRole] = useState(null);
  const [editRoleName, setEditRoleName] = useState("");

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
        const dataRoles = await getRoles(savedToken);
        console.log("Fetched roles:", dataRoles); // Fixed console message

        setRoles(dataRoles);

        // Transform API data for table
        if (dataRoles?.length) {
          const formatted = dataRoles.map((role, i) => ({
            id: role.id || i + 1,
            si_no: "",
            roles_name: role.name || role.roles_name || "",
            created: role.created_at
              ? new Date(role.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }),
            Action: "",
          }));
          setData(formatted); // Set formatted data to table
        }
      } catch (err) {
        console.error("Failed to load roles:", err); // Fixed error message

        if (err.status === 401 || err.response?.status === 401) {
          // Better error check
          localStorage.removeItem("token");
          router.replace("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    checkAuthAndFetchUsers();
  }, []); // Fixed: empty array instead of [router]

  // Filter data based on search term
  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        item.roles_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.created.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  // Sort data
  const sortedData = useMemo(() => {
    let sortableData = [...filteredData];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [filteredData, sortConfig]);

  // Paginate data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * entriesPerPage;
    return sortedData.slice(startIndex, startIndex + entriesPerPage);
  }, [sortedData, currentPage, entriesPerPage]);

  const totalPages = Math.ceil(sortedData.length / entriesPerPage);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleSelectRow = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set());
    } else {
      const allIds = new Set(paginatedData.map((item) => item.id));
      setSelectedRows(allIds);
    }
  };

  const handleAddRole = async (e) => {
    e.preventDefault();

    if (!newRoleName.trim()) {
      alert("Role name is required");
      return;
    }

    try {
      // Call API to create role
      const savedToken = localStorage.getItem("token");
      const newRoleFromAPI = await createRole(
        { name: newRoleName }, // roleData
        savedToken // token
      );

      console.log("Role created:", newRoleFromAPI);

      // Add to table data
      const newRole = {
        id: newRoleFromAPI.id,
        si_no: "",
        roles_name: newRoleFromAPI.name || newRoleName,
        created: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        Action: "",
      };

      setData([...data, newRole]);
      setNewRoleName("");
      setShowAddModal(false);
      alert("Role created successfully!");
    } catch (error) {
      console.error("Failed to create role:", error);
      alert(error.response?.data?.message || "Failed to create role");
    }
  };

  const handleEditRole = (role) => {
    setEditingRole(role);
    setEditRoleName(role.roles_name);
    setShowEditModal(true);
  };

  const handleSaveEditRole = (e) => {
    e.preventDefault();
    if (editRoleName.trim() && editingRole) {
      setData(
        data.map((role) =>
          role.id === editingRole.id
            ? { ...role, roles_name: editRoleName }
            : role
        )
      );
      setShowEditModal(false);
      setEditingRole(null);
      setEditRoleName("");
    }
  };

  const handleDeleteRole = (id) => {
    if (confirm("Are you sure you want to delete this role?")) {
      setData(data.filter((role) => role.id !== id));
      setSelectedRows(
        new Set(Array.from(selectedRows).filter((rowId) => rowId !== id))
      );
    }
  };

  return (
    <>
      <div className="content pb-0">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1">
              Roles &amp; Permissions
              <span className="badge badge-soft-primary ms-2">
                {data.length}
              </span>
            </h4>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Roles &amp; Permissions
                </li>
              </ol>
            </nav>
          </div>
          <div className="gap-2 d-flex align-items-center flex-wrap">
            <div className="dropdown">
              <button
                className="dropdown-toggle btn btn-outline-light px-2 shadow"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-package-export me-2" />
                Export
              </button>
              <div className="dropdown-menu dropdown-menu-end">
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
                      Export as Excel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button
              className="btn btn-icon btn-outline-light shadow"
              title="Refresh"
              onClick={() => window.location.reload()}
            >
              <i className="ti ti-refresh" />
            </button>
            <button
              className="btn btn-icon btn-outline-light shadow"
              title="Collapse"
              id="collapse-header"
            >
              <i className="ti ti-transition-top" />
            </button>
          </div>
        </div>
        {/* End Page Header */}

        {/* Card Start */}
        <div className="card border-0 rounded-0">
          <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
            <div className="input-icon input-icon-start position-relative">
              <span className="input-icon-addon text-dark"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => setShowAddModal(true)}
            >
              <i className="ti ti-square-rounded-plus-filled me-1" />
              Add New Role
            </button>
          </div>

          <div className="card-body">
            {/* Roles List Table */}
            <div className="table-responsive custom-table">
              <table className="table table-nowrap" id="roles_list">
                <thead className="table-light">
                  <tr>
                    <th className="no-sort">
                      <div className="form-check form-check-md">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="select-all"
                          checked={
                            selectedRows.size === paginatedData.length &&
                            paginatedData.length > 0
                          }
                          onChange={handleSelectAll}
                        />
                      </div>
                    </th>
                    <th
                      onClick={() => handleSort("roles_name")}
                      style={{ cursor: "pointer" }}
                    >
                      Role Name{" "}
                      {sortConfig.key === "roles_name" &&
                        (sortConfig.direction === "asc" ? "▲" : "▼")}
                    </th>
                    <th
                      onClick={() => handleSort("created")}
                      style={{ cursor: "pointer" }}
                    >
                      Created{" "}
                      {sortConfig.key === "created" &&
                        (sortConfig.direction === "asc" ? "▲" : "▼")}
                    </th>
                    <th className="no-sort">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((role) => (
                    <tr key={role.id}>
                      <td>
                        <div className="form-check form-check-md">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={selectedRows.has(role.id)}
                            onChange={() => handleSelectRow(role.id)}
                          />
                        </div>
                      </td>
                      <td>{role.roles_name}</td>
                      <td>{role.created}</td>
                      <td>
                        <div className="dropdown table-action">
                          <button
                            className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="ti ti-dots-vertical"></i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              onClick={() => handleEditRole(role)}
                            >
                              <i className="ti ti-edit text-blue"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              onClick={() => handleDeleteRole(role.id)}
                            >
                              <i className="ti ti-trash"></i> Delete
                            </a>
                            <Link
                              className="dropdown-item"
                              href="/dashboard/permission"
                            >
                              <i className="ti ti-shield"></i> Permission
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {paginatedData.length === 0 && (
              <div className="text-center py-4">
                <p className="text-muted">No records found</p>
              </div>
            )}

            {/* Pagination */}
            <div className="row align-items-center mt-3">
              <div className="col-md-6">
                <div className="datatable-length">
                  <label>
                    Show
                    <select
                      className="form-select form-select-sm ms-2 me-2"
                      value={entriesPerPage}
                      onChange={(e) => {
                        setEntriesPerPage(Number(e.target.value));
                        setCurrentPage(1);
                      }}
                      style={{ width: "auto", display: "inline-block" }}
                    >
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                    </select>
                    entries
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="datatable-paginate">
                  <nav>
                    <ul className="pagination pagination-sm justify-content-end">
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          <i className="ti ti-chevron-left"></i> Previous
                        </button>
                      </li>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <li
                            key={page}
                            className={`page-item ${
                              currentPage === page ? "active" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </button>
                          </li>
                        )
                      )}

                      <li
                        className={`page-item ${
                          currentPage === totalPages ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          Next <i className="ti ti-chevron-right"></i>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Role Modal */}
        {showAddModal && (
          <div
            className="modal fade show d-block"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Role</h5>
                  <button
                    className="btn-close custom-btn-close border p-1 me-0 text-dark"
                    onClick={() => setShowAddModal(false)}
                  ></button>
                </div>
                <form onSubmit={handleAddRole}>
                  <div className="modal-body">
                    <div className="mb-0">
                      <label className="form-label">
                        Role Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={newRoleName}
                        onChange={(e) => setNewRoleName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="d-flex align-items-center justify-content-end m-0">
                      <button
                        type="button"
                        className="btn btn-light me-2"
                        onClick={() => setShowAddModal(false)}
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Create
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Edit Role Modal */}
        {showEditModal && (
          <div
            className="modal fade show d-block"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Role</h5>
                  <button
                    className="btn-close custom-btn-close border p-1 me-0 text-dark"
                    onClick={() => setShowEditModal(false)}
                  ></button>
                </div>
                <form onSubmit={handleSaveEditRole}>
                  <div className="modal-body">
                    <div className="mb-0">
                      <label className="form-label">
                        Role Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={editRoleName}
                        onChange={(e) => setEditRoleName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="d-flex align-items-center justify-content-end m-0">
                      <button
                        type="button"
                        className="btn btn-light me-2"
                        onClick={() => setShowEditModal(false)}
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
