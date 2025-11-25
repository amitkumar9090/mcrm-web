'use client';

import React, { useState, useMemo } from 'react';

// ---------------------------
// Dummy Bank Verification Data
// ---------------------------
const initialVerifications = [
  { id: 1, user: 'John Doe', accountNumber: '1234567890', bankName: 'HDFC Bank', status: 'verified', created_at: '2024-11-01T10:00:00Z' },
  { id: 2, user: 'Jane Smith', accountNumber: '9876543210', bankName: 'ICICI Bank', status: 'pending', created_at: '2024-11-05T11:00:00Z' },
  { id: 3, user: 'Alice Johnson', accountNumber: '4567891230', bankName: 'SBI', status: 'rejected', created_at: '2024-10-28T09:00:00Z' },
];

// ---------------------------
// Page Component
// ---------------------------
const page = () => {
  const [verifications] = useState(initialVerifications);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Filtered list
  const filtered = useMemo(() => {
    return verifications.filter(
      (v) =>
        v.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.accountNumber.includes(searchTerm) ||
        v.bankName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [verifications, searchTerm]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return filtered.slice(start, start + entriesPerPage);
  }, [filtered, currentPage, entriesPerPage]);

  const totalPages = Math.ceil(filtered.length / entriesPerPage);

  const getStatusBadge = (status: string) => {
    let className = 'bg-secondary';
    if (status === 'verified') className = 'bg-success';
    else if (status === 'pending') className = 'bg-warning text-dark';
    else if (status === 'rejected') className = 'bg-danger';
    return <span className={`badge ${className}`}>{status.toUpperCase()}</span>;
  };

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
  };

  return (
    <div className="container py-4">
      <h4 className="mb-4 fw-bold">Bank Verification</h4>

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by user, account number, bank, or status..."
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
                  <th>User</th>
                  <th>Account Number</th>
                  <th>Bank Name</th>
                  <th>Created At</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-muted">
                      No bank verifications found
                    </td>
                  </tr>
                ) : (
                  paginated.map((v) => (
                    <tr key={v.id}>
                      <td>{v.user}</td>
                      <td>{v.accountNumber}</td>
                      <td>{v.bankName}</td>
                      <td>{formatDate(v.created_at)}</td>
                      <td>{getStatusBadge(v.status)}</td>
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
