'use client';

import React, { useState, useMemo } from 'react';

// Dummy commission rules data
const initialRules = [
  { id: 1, name: 'Electronics Commission', type: 'Percentage', value: 5, status: 'active', created_at: '2024-11-01T10:00:00Z' },
  { id: 2, name: 'Fashion Commission', type: 'Fixed', value: 10, status: 'inactive', created_at: '2024-11-05T12:00:00Z' },
  { id: 3, name: 'Home & Kitchen', type: 'Percentage', value: 7, status: 'active', created_at: '2024-11-10T09:30:00Z' },
];

const page = () => {
  const [rules, setRules] = useState(initialRules);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Filter + Pagination
  const filtered = useMemo(() => {
    return rules.filter(
      (r) =>
        r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [rules, searchTerm]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return filtered.slice(start, start + entriesPerPage);
  }, [filtered, currentPage, entriesPerPage]);

  const totalPages = Math.ceil(filtered.length / entriesPerPage);

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
  };

  const getStatusBadge = (status: string) => {
    return status === 'active' ? (
      <span className="badge bg-success">{status}</span>
    ) : (
      <span className="badge bg-secondary">{status}</span>
    );
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 fw-bold">Commission Rules</h1>

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name or type..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          style={{ maxWidth: '400px' }}
        />
      </div>

      {/* Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover m-0">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Value</th>
                  <th>Created At</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-muted">
                      No commission rules found
                    </td>
                  </tr>
                ) : (
                  paginated.map((r) => (
                    <tr key={r.id}>
                      <td>{r.name}</td>
                      <td>{r.type}</td>
                      <td>{r.type === 'Percentage' ? `${r.value}%` : `$${r.value}`}</td>
                      <td>{formatDate(r.created_at)}</td>
                      <td>{getStatusBadge(r.status)}</td>
                      <td>
                        <button className="btn btn-sm btn-primary me-2">Edit</button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() =>
                            setRules((prev) => prev.filter((rule) => rule.id !== r.id))
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="card-footer d-flex justify-content-between align-items-center">
            <div>
              Show{' '}
              <select
                className="form-select d-inline-block w-auto"
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
              </select>{' '}
              entries
            </div>

            <ul className="pagination pagination-sm mb-0">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <li key={p} className={`page-item ${currentPage === p ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(p)}>
                    {p}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
