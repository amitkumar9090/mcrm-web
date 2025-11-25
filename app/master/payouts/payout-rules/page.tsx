'use client';

import React, { useState, useMemo } from 'react';

// ---------------------------
// Dummy Payout Rules Data
// ---------------------------
const initialRules = [
  { id: 1, ruleName: 'Standard Commission', description: '5% commission on all products', status: 'active', created_at: '2024-09-01T10:00:00Z' },
  { id: 2, ruleName: 'Holiday Bonus', description: '10% commission during holidays', status: 'inactive', created_at: '2024-10-10T12:00:00Z' },
  { id: 3, ruleName: 'Premium Seller', description: '7% commission for premium sellers', status: 'active', created_at: '2024-11-05T09:30:00Z' },
];

// ---------------------------
// Page Component
// ---------------------------
const page = () => {
  const [rules] = useState(initialRules);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Filtered rules
  const filtered = useMemo(() => {
    return rules.filter(
      (r) =>
        r.ruleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [rules, searchTerm]);

  // Pagination
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return filtered.slice(start, start + entriesPerPage);
  }, [filtered, currentPage, entriesPerPage]);

  const totalPages = Math.ceil(filtered.length / entriesPerPage);

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
  };

  return (
    <div className="container py-4">
      <h4 className="mb-4 fw-bold">Payout Rules</h4>

      {/* Search & Add Rule */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search by rule name, description, or status..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          style={{ maxWidth: '350px' }}
        />
        <button className="btn btn-primary">Add New Rule</button>
      </div>

      {/* Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover m-0">
              <thead className="table-light">
                <tr>
                  <th>Rule Name</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-muted">
                      No payout rules found
                    </td>
                  </tr>
                ) : (
                  paginated.map((rule) => (
                    <tr key={rule.id}>
                      <td>{rule.ruleName}</td>
                      <td>{rule.description}</td>
                      <td>
                        <span
                          className={`badge ${
                            rule.status === 'active' ? 'bg-success' : 'bg-secondary'
                          }`}
                        >
                          {rule.status.toUpperCase()}
                        </span>
                      </td>
                      <td>{formatDate(rule.created_at)}</td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                        <button className="btn btn-sm btn-outline-danger">Delete</button>
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
                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
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
                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
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
