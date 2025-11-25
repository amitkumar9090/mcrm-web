'use client';

import React, { useState, useMemo } from 'react';

// ---------------------------
// Dummy Rejected Payouts Data
// ---------------------------
const initialPayouts = [
  { id: 1, recipient: 'Alice Johnson', amount: 300, method: 'Bank Transfer', status: 'rejected', requested_at: '2024-11-10T10:00:00Z' },
  { id: 2, recipient: 'Bob Smith', amount: 150, method: 'PayPal', status: 'rejected', requested_at: '2024-11-12T14:30:00Z' },
  { id: 3, recipient: 'Carol Davis', amount: 500, method: 'Bank Transfer', status: 'rejected', requested_at: '2024-11-14T09:15:00Z' },
];

// ---------------------------
// Page Component
// ---------------------------
const page = () => {
  const [payouts] = useState(initialPayouts);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Filtered payouts
  const filtered = useMemo(() => {
    return payouts.filter(
      (p) =>
        p.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.method.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [payouts, searchTerm]);

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
      <h4 className="mb-4 fw-bold">Rejected Payouts</h4>

      {/* Search */}
      <div className="mb-3" style={{ maxWidth: '350px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search by recipient or method..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover m-0">
              <thead className="table-light">
                <tr>
                  <th>Recipient</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Status</th>
                  <th>Requested At</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-muted">
                      No rejected payouts found
                    </td>
                  </tr>
                ) : (
                  paginated.map((payout) => (
                    <tr key={payout.id}>
                      <td>{payout.recipient}</td>
                      <td>${payout.amount}</td>
                      <td>{payout.method}</td>
                      <td>
                        <span className="badge bg-danger text-white">
                          {payout.status.toUpperCase()}
                        </span>
                      </td>
                      <td>{formatDate(payout.requested_at)}</td>
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
