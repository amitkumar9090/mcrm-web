'use client';

import React, { useState, useMemo } from 'react';

// ---------------------------
// Dummy Seller Payouts Data
// ---------------------------
const initialPayouts = [
  { id: 1, seller: 'Tech Store', totalSales: 12000, payoutAmount: 1200, status: 'pending', requested_at: '2024-11-11T09:30:00Z' },
  { id: 2, seller: 'Fashion Hub', totalSales: 8000, payoutAmount: 800, status: 'approved', requested_at: '2024-11-13T14:20:00Z' },
  { id: 3, seller: 'Home Essentials', totalSales: 5000, payoutAmount: 500, status: 'paid', requested_at: '2024-11-15T10:15:00Z' },
];

// ---------------------------
// Page Component
// ---------------------------
const page = () => {
  const [payouts] = useState(initialPayouts);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Filter payouts
  const filtered = useMemo(() => {
    return payouts.filter((p) => p.seller.toLowerCase().includes(searchTerm.toLowerCase()));
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <span className="badge bg-warning text-dark">Pending</span>;
      case 'approved':
        return <span className="badge bg-success">Approved</span>;
      case 'paid':
        return <span className="badge bg-primary">Paid</span>;
      case 'rejected':
        return <span className="badge bg-danger">Rejected</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  return (
    <div className="container py-4">
      <h4 className="mb-4 fw-bold">Seller Payouts</h4>

      {/* Search */}
      <div className="mb-3" style={{ maxWidth: '350px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search by seller..."
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
                  <th>Seller</th>
                  <th>Total Sales</th>
                  <th>Payout Amount</th>
                  <th>Status</th>
                  <th>Requested At</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-muted">
                      No payouts found
                    </td>
                  </tr>
                ) : (
                  paginated.map((payout) => (
                    <tr key={payout.id}>
                      <td>{payout.seller}</td>
                      <td>${payout.totalSales}</td>
                      <td>${payout.payoutAmount}</td>
                      <td>{getStatusBadge(payout.status)}</td>
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
