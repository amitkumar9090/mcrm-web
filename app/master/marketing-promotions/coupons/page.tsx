'use client';

import React, { useState, useMemo } from 'react';

// ---------------------------
// Dummy Coupons Data
// ---------------------------
const initialCoupons = [
  { id: 1, code: 'WELCOME10', discount: '10%', type: 'Percentage', status: 'active', created_at: '2024-11-01T10:00:00Z' },
  { id: 2, code: 'FESTIVE50', discount: '$50', type: 'Fixed', status: 'expired', created_at: '2024-10-15T12:00:00Z' },
  { id: 3, code: 'BLACKFRIDAY', discount: '20%', type: 'Percentage', status: 'active', created_at: '2024-11-20T09:00:00Z' },
  { id: 4, code: 'SUMMER15', discount: '15%', type: 'Percentage', status: 'inactive', created_at: '2024-09-10T14:30:00Z' },
];

// ---------------------------
// Coupons Page
// ---------------------------
const page = () => {
  const [coupons] = useState(initialCoupons);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Filtered coupons
  const filteredCoupons = useMemo(() => {
    return coupons.filter(
      (c) =>
        c.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [coupons, searchTerm]);

  // Paginate
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return filteredCoupons.slice(start, start + entriesPerPage);
  }, [filteredCoupons, currentPage, entriesPerPage]);

  const totalPages = Math.ceil(filteredCoupons.length / entriesPerPage);

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
  };

  const getStatusBadge = (status: string) => {
    let className = 'bg-secondary';
    if (status === 'active') className = 'bg-success';
    else if (status === 'expired') className = 'bg-danger';
    else if (status === 'inactive') className = 'bg-warning text-dark';
    return <span className={`badge ${className}`}>{status.toUpperCase()}</span>;
  };

  return (
    <div className="container py-4">
      <h4 className="mb-4 fw-bold">Coupons</h4>

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by code, type, or status..."
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
                  <th>Code</th>
                  <th>Discount</th>
                  <th>Type</th>
                  <th>Created At</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-muted">
                      No coupons found
                    </td>
                  </tr>
                ) : (
                  paginated.map((c) => (
                    <tr key={c.id}>
                      <td>{c.code}</td>
                      <td>{c.discount}</td>
                      <td>{c.type}</td>
                      <td>{formatDate(c.created_at)}</td>
                      <td>{getStatusBadge(c.status)}</td>
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
