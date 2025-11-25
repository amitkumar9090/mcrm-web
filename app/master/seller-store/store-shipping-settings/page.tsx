"use client";

import React, { useState } from 'react';

// Dummy data
const dummyUsers = [
  {
    id: 1,
    name: 'John Anderson',
    email: 'john.anderson@example.com',
    phone: '+1 555-0101',
    role: 'Administrator',
    avatar: null,
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-11-18T14:22:00Z',
    status: 'active'
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@example.com',
    phone: '+1 555-0102',
    role: 'Editor',
    avatar: null,
    created_at: '2024-02-20T09:15:00Z',
    updated_at: '2024-11-19T08:45:00Z',
    status: 'active'
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    phone: '+1 555-0103',
    role: 'Viewer',
    avatar: null,
    created_at: '2024-03-10T11:20:00Z',
    updated_at: '2024-11-17T16:30:00Z',
    status: 'inactive'
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@example.com',
    phone: '+1 555-0104',
    role: 'Administrator',
    avatar: null,
    created_at: '2024-04-05T13:45:00Z',
    updated_at: '2024-11-19T11:15:00Z',
    status: 'active'
  },
  {
    id: 5,
    name: 'David Thompson',
    email: 'david.thompson@example.com',
    phone: '+1 555-0105',
    role: 'Editor',
    avatar: null,
    created_at: '2024-05-12T15:30:00Z',
    updated_at: '2024-11-18T09:20:00Z',
    status: 'active'
  },
  {
    id: 6,
    name: 'Lisa Wang',
    email: 'lisa.wang@example.com',
    phone: '+1 555-0106',
    role: 'Viewer',
    avatar: null,
    created_at: '2024-06-18T08:00:00Z',
    updated_at: '2024-11-16T14:50:00Z',
    status: 'inactive'
  }
];

// Users Table Component
function UsersTable() {
  const [users] = useState(dummyUsers);

  // Format date
  const formatDate = (dateString: string) => {
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
  const formatTimeAgo = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600)
      return `${Math.floor(diffInSeconds / 60)} mins ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800)
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    return formatDate(dateString);
  };

  // Get initials
  const getInitials = (name: string) => {
    if (!name) return "U";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return parts[0][0] + parts[1][0];
    }
    return parts[0][0];
  };

  return (
    <div className="content pb-0">

      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4>
         Store-shipping-settings
          <span className="badge bg-primary ms-2">{users.length}</span>
        </h4>
      </div>

      <div className="card border-0 rounded-0">
        <div className="card-header d-flex justify-content-between">
          <input type="text" className="form-control w-50" placeholder="Search users..." />
          <button className="btn btn-primary">Add User</button>
        </div>

        <div className="card-body">
          <div className="table-responsive custom-table">
            <table className="table table-nowrap">
              <thead className="table-light">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Created</th>
                  <th>Last Activity</th>
                  <th>Status</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <input type="checkbox" className="form-check-input" />
                    </td>

                    <td>
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-rounded me-2">
                          <span className="avatar-title bg-primary text-white rounded-circle">
                            {getInitials(user.name)}
                          </span>
                        </span>
                        <div>
                          <strong>{user.name}</strong>
                          <div className="text-muted small">{user.role}</div>
                        </div>
                      </div>
                    </td>

                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{formatDate(user.created_at)}</td>
                    <td>{formatTimeAgo(user.updated_at)}</td>

                    <td>
                      <span className={`badge ${user.status === "active" ? "bg-success" : "bg-danger"}`}>
                        {user.status === "active" ? "Active" : "Inactive"}
                      </span>
                    </td>

                    <td className="text-end">
                      <button className="btn btn-sm btn-outline-secondary">⋮</button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// FINAL PAGE EXPORT
export default function Page() {
  return (
    <div>
      {/* <h1 className="m-3">Admin List</h1> */}
      <UsersTable />
    </div>
  );
}
